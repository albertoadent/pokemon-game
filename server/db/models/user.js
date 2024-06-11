"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: false },
      username: { type: DataTypes.STRING, unique: true, allowNull: false },
      hash_password: { type: DataTypes.STRING, allowNull: false },
      user_wins: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      user_losses: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
