'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'tripId', {
      type: Sequelize.INTEGER
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'tripId')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
