const CurdServices = require('./crud-service')
const { AirportRepository } = require('../repository/index')

class AirportServices extends CurdServices {
    constructor () {
        const airportRepository = new AirportRepository
        super(airportRepository)
    }
}

modeule.exports = AirportServices;