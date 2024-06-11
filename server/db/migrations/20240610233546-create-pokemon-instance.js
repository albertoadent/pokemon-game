'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemon-instance', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      poke_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"pokemon",
          key:"id"
        }
      },user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"user",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
  {freezeTableName:true});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pokemon-instance');
  }
};