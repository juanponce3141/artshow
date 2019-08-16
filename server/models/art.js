'use strict';
module.exports = (sequelize, DataTypes) => {
  const Art = sequelize.define('Art', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    year: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Art.associate = function(models) {
    Art.hasMany(models.Comments, {
      foreignKey: 'commentId',
      as: 'comments',
    });  
  };
  return Art;
};