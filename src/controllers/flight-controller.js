const { FlightService } = require("../services/index");

const flightService = new FlightService;

const create = async ( req, res ) => {
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
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a Flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not create Flight',
            err: error
        })
    }
}

const getAll = async ( req, res ) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(201).json({
            data: flights,
            success: true,
            message: 'Successfully fteched the Flights',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not fetch Flights',
            err: error
        })
    }
}

const get = async ( req, res ) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully fteched the Flights',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not fetch Flights',
            err: error
        })
    }
}

module.exports = { create, getAll, get }