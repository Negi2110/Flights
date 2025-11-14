const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');
const router = express.Router();

//api/v1/cities POSt
router.post('/',CityMiddlewares.validateCreateRequest,
    CityController.createCity);

    //api/v1/cities GEt
router.get('/',
    CityController.getCities);

 //api/v1/cities/:id  GEt
router.get('/:id',
    CityController.getCity);

    //api/v1/cities/:id POSt
router.delete('/:id',
    CityController.destroyCity);

    //api/v1/cities/:id  PATCHe
router.patch('/:id',
    CityController.updateCity);

module.exports = router;