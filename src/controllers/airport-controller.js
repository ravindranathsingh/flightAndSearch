const { AirportServices } = require('../services/index')
const { SuccessCode } = require('../utils/error-codes')

const airportServices = new AirportServices;

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureAirportId: req.body.departureAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate
        }
        const response = await airportServices.create(flightRequestData)
        return res.status(SuccessCode.OK).json({
            data: response,
            success: true,
            message: 'Successfully created the Airport',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not create Airport',
            err: error
        })
    }
}

module.exports = { create }