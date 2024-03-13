const { ClientErrorCode } = require('../utils/error-codes')

const validateCreateFlight = async ( req, res, next ) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.arrivalAirportId ||
        !req.body.departureAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price ||
        !req.body.boardingGate
    ) {
        return res.status(ClientErrorCode.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Inavlid request for create flight",
            err: "Missing mandatory property to create a flight"
        })
    }
    next();
}

module.exports = { validateCreateFlight }