const { Flghts } = require('../models/index')
const { Op } = require('sequelize');

class FlightRepository {

    #craeteFilter(data) {
        let filter = {} 
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter = []
        if(data.minPrice) {
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            priceFilter.push({price: {[Op.lte]: data.maxPrice}}); 
        }
        Object.assign(filter, {[Op.and]: priceFilter})
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flghts.create(data)
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flghts.findByPk(flightId)
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }

    async getAllFlights(filter) {        
        try {
            const filterObject = this.#craeteFilter(filter)
            const flight = await Flghts.findAll({
                where: filterObject
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }

    async updateFlight(data, flightId) {
        try {
            await Flghts.update(data, {
                where: {
                    id: flightId
                }
            })
            return true
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }
}

module.exports = FlightRepository;