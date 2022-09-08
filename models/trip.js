'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trip.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Trip.hasOne(models.Vehicle, {
        foreignKey: 'trip_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Trip.init(
    {
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pickupTime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pickupLocation: {
        type: DataTypes.STRING,
        allowNull: false
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vehicleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'vehicle_id',
        onDelete: 'CASCADE',
        references: {
          model: 'vehicles',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Trip',
      tableName: 'trips'
    }
  )
  return Trip
}
