const { CityServices } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { ErrorResponse, SuccessResponse } = require('../utils/common')
/***
 * POSt :/cities
 * req-body {"name":"dehradoon"}
 */
async function createCity(req, res) {
    try {
        const city = await CityServices.createCity({
            name: req.body.name,
            
        })


        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * GEt:/cities
 * req-body {}
 */
async function getCities(req, res) {
    try {
        const cities = await CityServices.getCities();
        //return airplanes;
        SuccessResponse.data = cities;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * GEt:/cities/:id
 * req-body {}
 */
async function getCity(req, res) {
    try {
        const city = await CityServices.getCity(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
/***
 * DELETe :/cities/:id
 * req-body {}
 */

async function destroyCity(req, res) {
    try {
        const city = await CityServices.destroyCity(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * PATCHe:/cities/:id
 * req-body {data}
 */
async function updateCity(req, res) {
    try {
        const city = await CityServices.updateCity(req.params.id,req.body);
        //return airplanes;
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = {
    createCity,
    destroyCity,
    updateCity,
    getCities,
    getCity
}