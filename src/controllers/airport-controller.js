const { AirportService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { ErrorResponse, SuccessResponse } = require('../utils/common')
/***
 * POSt:/airports
 * req-body {name: 'IGI',cityId: 5,code: 'DEL'  }
 */
async function createAirport(req, res) {
    try {
        
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        })


        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * GEt:/airports
 * req-body {}
 */
async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        //return airplanes;
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * GEt:/airports/:id
 * req-body {}
 */
async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * DELETe:/airports/:id
 * req-body {}
 */
async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        //return airplanes;
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * PATCHe:/airports/:id
 * req-body {data}
 */
async function updateAirport(req, res) {
    try {
        const airport = await AirportService.updateAirport(req.params.id,req.body);
        //return airplanes;
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}