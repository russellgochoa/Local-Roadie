const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/TripController')

Router.get('/', controller.GetAllTrips)
Router.post('/:trip_id', controller.CreateTrip)
Router.put('/:trip_id', controller.UpdateTrip)
Router.delete('/:trip_id', controller.DeleteTrip)
module.exports = Router
