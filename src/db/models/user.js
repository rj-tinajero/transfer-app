'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "must be valid email"}
      }
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    firestore_credits: {
      type: DataTypes.NUMERIC(12, 3),
      defaultValue: 100.000
    }, 
    db_credits: {
      type: DataTypes.NUMERIC(12, 3),
      defaultValue: 100.000
    }, 
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    
  };
  return User;
};