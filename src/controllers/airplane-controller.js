const { AirplaneService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { ErrorResponse, SuccessResponse } = require('../utils/common')
/***
 * POSt:/airplanes
 * req-body {modelNumber:'airbus320' , capacity:200}
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })


        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * GEt:/airplanes
 * req-body {}
 */
async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        //return airplanes;
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * GEt:/airplanes/:id
 * req-body {}
 */
async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * DELETe:/airplanes/:id
 * req-body {}
 */
async function destroyAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        //return airplanes;
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * PATCHe:/airplanes/:id
 * req-body {data}
 */
async function updateAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.updateAirplane(req.params.id,req.body);
        //return airplanes;
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}