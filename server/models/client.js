'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    location: DataTypes.STRING,
    maxbid: DataTypes.INTEGER
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};