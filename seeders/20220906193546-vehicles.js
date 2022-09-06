'use strict'

const trip = require('../models/trip')

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vehicles', [
      {
        type: 'van',
        make: 'Honda',
        model: 'Odyssey',
        capacity: '10 passenger',
        price: '$20',
        tripId: trip.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vehicles', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
