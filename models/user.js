'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Trip, {
        foreignKey: 'tripId',
        as: 'userId',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gear: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      tripId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // field: 'trip_id',
        onDelete: 'CASCADE',
        references: {
          model: 'trips',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
