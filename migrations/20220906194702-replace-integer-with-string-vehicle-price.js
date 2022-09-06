'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('vehicles', 'price', {
      type: Sequelize.STRING
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('vehicles', 'price', {
      type: Sequelize.STRING
    })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
