const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const VehicleRouter = require('./VehicleRouter')
const TripRouter = require('./TripRouter')
Router.use('/users', UserRouter)
Router.use('/vehicles', VehicleRouter)
Router.use('/trips', TripRouter)

module.exports = Router
