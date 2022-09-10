'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'Russell',
        lastName: 'Ochoa',
        username: 'russgus',
        password: 'fxfxfxfx',
        email: 'russ@russ.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Joe',
        lastName: 'Strummer',
        username: 'joestrum',
        password: 'clclclcl',
        email: 'joe@strum.com',
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
    return queryInterface.bulkDelete('users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
