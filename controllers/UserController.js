const { User, Review } = require('../models')
const middleware = require('../middleware')
const { Op } = require('sequelize')

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({})
    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers
}
