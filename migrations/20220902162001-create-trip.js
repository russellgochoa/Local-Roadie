'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      pickupTime: {
        type: Sequelize.INTEGER
      },
      pickupLocation: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'vehicle_id',
        onDelete: 'CASCADE',
        references: {
          model: 'vehicles',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        refereces: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trips')
  }
}
