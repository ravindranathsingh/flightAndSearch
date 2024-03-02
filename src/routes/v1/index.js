const express = require('express');
const { CityController, FlightController } = require("../../controllers/index")

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll)
router.patch('/city/:id', CityController.update);

router.post('/flghts', FlightController.create);

module.exports = router;