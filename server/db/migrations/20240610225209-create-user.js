"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "user",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        hash_password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_wins: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false,
        },
        user_losses: {
          type: Sequelize.STRING,
          defaultValue: 0,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      { freezeTableName: true }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user");
  },
};
