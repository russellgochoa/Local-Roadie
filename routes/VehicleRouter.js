const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/VehicleController')

Router.get('/', controller.GetAllVehicles)

module.exports = Router
