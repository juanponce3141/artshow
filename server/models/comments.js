'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    userID: DataTypes.STRING,
    name: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};