const { Flghts } = require('../models/index')

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flghts.create(data)
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }
}

module.exports = FlightRepository;