'use strict'
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    timestamps: false
  })
  Restaurant.associate = function (models) {
    // associations can be defined here
  }
  return Restaurant
}
