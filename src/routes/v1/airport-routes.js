const express = require('express');
const { AirportController } = require('../../controllers');
const {  AirportMiddlewares } = require('../../middlewares');
const router = express.Router();

//api/v1/airports POSt
router.post('/',AirportMiddlewares.validateCreateRequest,AirportController.createAirport);

//api/v1/airports GEt
router.get('/',
    AirportController.getAirports);

 //api/v1/airports/:id  GEt
router.get('/:id',
    AirportController.getAirport);

//api/v1/airports/:id  DELETe
router.delete('/:id',
    AirportController.destroyAirport);

//api/v1/airports/:id  PATCHe
router.patch('/:id',
    AirportController.updateAirport);

  
module.exports = router