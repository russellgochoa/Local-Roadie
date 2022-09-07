const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/TripController')

Router.get('/', controller.GetAllTrips)
Router.post('/:tripId', controller.CreateTrip)
Router.put('/:tripId', controller.UpdateTrip)
module.exports = Router
