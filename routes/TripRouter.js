const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/TripController')

Router.get('/', controller.GetAllTrips)
Router.post('/:tripId', controller.CreateTrip)
module.exports = Router
