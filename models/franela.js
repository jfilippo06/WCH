'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Franela extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Franela.hasOne(models.Factura)
    }
  }
  Franela.init({
    tela: DataTypes.STRING,
    talla: DataTypes.STRING,
    color: DataTypes.STRING,
    cuello: DataTypes.STRING,
    manga: DataTypes.STRING,
    marca: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.DOUBLE,
    observasion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Franela',
  });
  return Franela;
};