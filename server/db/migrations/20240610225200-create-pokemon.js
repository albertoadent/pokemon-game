"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "pokemon",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique:true
        },
        type: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        api_url_call: {
          type: Sequelize.STRING(50),
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
    await queryInterface.dropTable("pokemon");
  },
};
