'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "must be a valid email"}
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firestore_credits: {
        type: Sequelize.NUMERIC(12, 3),
        defaultValue: 100.000
      },
      db_credits: {
        type: Sequelize.NUMERIC(12, 3),
        defaultValue: 100.000
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};