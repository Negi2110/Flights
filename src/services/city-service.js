const { CityRepository } = require('../repositories')
const { StatusCodes } = require('http-status-codes')
const AppError = require('../utils/errors/app-error')

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        
        //both error structure is same for validation and uniqueconstrain error
        if (error.name === 'SequelizeValidationError'|| error.name === 'SequelizeUniqueConstraintError' ) {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message)
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError('Cannnot create new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCities() {
    try {
        const cars = await cityRepository.getAll();
        return cars;
    } catch (error) {
        throw new AppError('Cannnot fetch data of all the Cities', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function getCity(id) {
    try {
        const car = await cityRepository.get(id);

        return car;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The city you requested is not present', error.statusCode);
        }
        throw new AppError('Cannnot fetch data of  the city', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The city you requested to delete is not present', error.statusCode);

        }
        throw new AppError('Cannnot fetch data of  the city', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function updateCity(id, data) {
    try {
        const response = await cityRepository.update(id, data);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The city you requested to update is not present', error.statusCode);
        }
        throw new AppError('Not updated', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}
module.exports = {
    createCity,
    destroyCity,
    updateCity,
    getCity,
    getCities
}