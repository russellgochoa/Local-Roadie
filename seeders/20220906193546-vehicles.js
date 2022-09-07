'use strict'

const trip = require('../models/trip')

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'vehicles',
      [
        {
          type: 'Sprinter Cargo Van',
          make: 'Mercedes-Benz',
          model: 'F2CA170',
          capacity: '530 cubic ft.',
          price: '$15',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 'Truck',
          make: 'Ford',
          model: 'F-150',
          capacity: '52 cubic ft.',
          price: '$10',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: 'Box Truck',
          make: 'Isuzu',
          model: 'NPR HD',
          capacity: '840 cubic ft.',
          price: '$20',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
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
