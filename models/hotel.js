'use strict'
module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define('Hotel', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    start: DataTypes.INTEGER,
    id_restaurant: DataTypes.STRING
  }, {
    timestamps: false
  })
  Hotel.associate = function (models) {
    // associations can be defined here
  }
  return Hotel
}
