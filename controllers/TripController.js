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

module.exports = {
  GetAllTrips
}
