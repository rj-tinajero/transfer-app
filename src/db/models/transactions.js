'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    senderId: {
      allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "sender"
        }
    },
    receiverId: {
      allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "receiver"
        }
    },
    db_amt_sent: {
      type: DataTypes.NUMERIC(6, 3)
    }, 
  }, {});
  transactions.associate = function(models) {
    // associations can be defined here
    transactions.hasOne(models.User, {
      as:'sender',
      foreignKey: "id",
    });
    transactions.hasOne(models.User, {
      as:'receiver',
      foreignKey: "id",
    });
  };
  return transactions;
};