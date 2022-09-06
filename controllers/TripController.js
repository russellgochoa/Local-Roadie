const { Trip } = require('../models')

const GetALlTrips = async (req, res) => {
  try {
    const trips = await Trip.findAll({})
    res.send(trips)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetALlTrips
}
