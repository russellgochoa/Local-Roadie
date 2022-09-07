'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'trips',
      [
        {
          date: '9/17/22',
          pickupTime: '4:00pm',
          pickupLocation: '600 N Lamar, Austin, TX 78703',
          destination: '912 Red River St, Austin, TX 78701',
          vehicleId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '9/20/22',
          pickupTime: '7:00pm',
          pickupLocation: '708 Patterson Ave, Austin, TX 78703',
          destination: '4204 Menchaca Rd, Austin, TX 78704',
          vehicleId: 2,
          userId: 2,
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
    return queryInterface.bulkDelete('trips', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
