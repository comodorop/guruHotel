'use strict'
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    idHotel: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    number: DataTypes.INTEGER
  }, {
    timestamps: false
  })
  Room.associate = function (models) {
    // associations can be defined here
  }
  return Room
}
