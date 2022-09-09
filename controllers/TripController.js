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
    let userId = parseInt(req.params.user_id)
    let tripBody = {
      userId,
      ...req.body
    }
    let trip = await Trip.create(tripBody)
    res.send(trip)
  } catch (error) {
    throw error
  }

  // console.log('CreateTrip')
}

const UpdateTrip = async (req, res) => {
  try {
    let tripId = parseInt(req.params.trip_id)
    let updatedTrip = await Trip.update(req.body, {
      where: { id: tripId },
      returning: true
    })
    res.send(updatedTrip)
  } catch (error) {
    throw error
  }
  // console.log('UpdateTrip')
}

const DeleteTrip = async (req, res) => {
  try {
    let tripId = parseInt(req.params.trip_id)
    await Trip.destroy({ where: { id: tripId } })
    res.send({ message: `Deleted trip with an id of ${tripId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllTrips,
  CreateTrip,
  UpdateTrip,
  DeleteTrip
}
