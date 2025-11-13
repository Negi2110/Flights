const express = require('express');
const { AirplaneController } = require('../../controllers')
const { AirplaneMiddlewares } = require('../../middlewares')
const router = express.Router();

//api/v1/airplanes POSt
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

//api/v1/airplanes GEt
router.get('/',
    AirplaneController.getAirplanes);

 //api/v1/airplanes/:id  GEt
router.get('/:id',
    AirplaneController.getAirplane);

//api/v1/airplanes/:id  DELETe
router.delete('/:id',
    AirplaneController.destroyAirplane);

//api/v1/airplanes/:id  PATCHe
router.patch('/:id',
    AirplaneController.updateAirplane);

  
module.exports = router