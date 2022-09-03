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
      Trip.belongsTo(models.User, { foreignKey: 'user_id' })
      Trip.hasOne(models.Vehicle, { foreignKey: 'vehicle_id' })
    }
  }
  Trip.init(
    {
      date: DataTypes.STRING,
      pickupTime: DataTypes.INTEGER,
      pickupLocation: DataTypes.STRING,
      destination: DataTypes.STRING,
      vehicleId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Trip',
      tableName: 'trips'
    }
  )
  return Trip
}
