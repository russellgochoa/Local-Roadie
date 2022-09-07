const { Vehicle } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetAllVehicles = async (req, res) => {
  try {
    const vehicles = await Trip.findAll({})
    res.send(vehicles)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllVehicles
}
