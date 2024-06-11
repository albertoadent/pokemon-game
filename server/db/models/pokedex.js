"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pokedex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pokedex.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { type: DataTypes.INTEGER, allowNull: false, unique: true },
      type: { type: DataTypes.STRING, allowNull: false },
      api_url_call: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "pokedex",
      freezeTableName: true,
    }
  );
  return pokedex;
};
