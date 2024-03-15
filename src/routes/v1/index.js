const express = require('express');
const { CityController, FlightController, AirportConstroller } = require("../../controllers/index")

const { FlightMiddleware } = require('../../middlewares/index')

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll)
router.patch('/city/:id', CityController.update);

router.post('/flghts', FlightMiddleware.validateCreateFlight, FlightController.create);
router.get('/flghts', FlightController.getAll);

router.get('/flights/:id', FlightController.get)
router.patch('/flights/:id', FlightController.update)

router.post('/airport' , AirportConstroller.create)

module.exports = router;