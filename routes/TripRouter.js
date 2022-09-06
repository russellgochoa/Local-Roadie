const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/TripController')

Router.get('/', controller.GetAllTrips)

module.exports = Router
