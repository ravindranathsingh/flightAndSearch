const { CityServices } = require('../services/index')
const { SuccessCode } = require('../utils/error-codes')

const cityServices = new CityServices();

const create = async ( req, res ) => {
    try {
        const city = await cityServices.createCity(req.body);
        return res.status(SuccessCode.CREATED).json({
            data: city,
            success: true,
            message: 'Successfully created a City!',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not create City',
            err: error
        })
    }
}

const destroy = async ( req, res ) => {
    try {
        const response = await cityServices.deleteCity(req.params.id);
        return res.status(SuccessCode.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted the City!',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not delete the City',
            err: error
        })
    }
}

const update = async ( req, res ) => {
    try {
        const city = await cityServices.updateCity(req.params.id, req.body);
        return res.status(SuccessCode.OK).json({
             data: city,
             success: true,
             message: 'Successfully updated the City!',
             err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not update the City',
            err: error
        })        
    }
}

const get = async ( req, res ) => {
    try {
        const city = await cityServices.getCity(req.params.id, req.body);
        return res.status(SuccessCode.OK).json({
            data: city,
            success: true,
            message: 'Successfully fteched the City!',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not fetch the City',
            err: error
        })
    }
}

const getAll = async ( req, res ) => {
    try {
        const cities = await cityServices.getAllCities(req.query)
        return res.status(SuccessCode.OK).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all the Cities',
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not fetch the Cities',
            err: error
        })
    }
}

module.exports = { create, destroy, update, get, getAll }