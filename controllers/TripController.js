const { Trip } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetAllTrips = async (req, res) => {
  try {
    const trips = await Trip.findAll({})
    res.send(trips)
  } catch (error) {
    throw error
  }
}

const CreateTrip = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let tripId = parseInt(req.params.tripId)

    let tripBody = {
      userId,
      tripId,
      ...req.body
    }
    let trip = await Trip.create(tripBody)
    res.send(trip)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllTrips,
  CreateTrip
}
