'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flghts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flghts.init({
    flightNumber: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    airplaneId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    arrivalAirportId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    departureAirportId: {
      allowNull: faqlse,
      type: DataTypes.INTEGER
    },
    arrivalTime: {
      allowNull: false,
      type: DataTypes.DATE
    },
    departureTime: {
      allowNull: false,
      type: DataTypes.DATE
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    boardingGate: {
      allowNull: false,
      type: DataTypes.STRING
    },
    totalSeats: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Flghts',
  });
  return Flghts;
};