'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pokemon.init({
    name: DataTypes.INTEGER,
    type: DataTypes.STRING,
    api_url_call: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'pokemon',
  });
  return pokemon;
};