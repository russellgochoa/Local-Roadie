'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.belongsTo(models.Trip, {
        foreignKey: 'trip_id',
        as: 'trip_vehicle',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Vehicle.init(
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      make: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      capacity: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tripId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'trip_id',
        onDelete: 'CASCADE',
        references: {
          model: 'trips',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Vehicle',
      tableName: 'vehicles'
    }
  )
  return Vehicle
}
