'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Salida.belongsTo(models.Cliente)
      Salida.belongsTo(models.Producto)
      Salida.belongsTo(models.Franela)
    }
  }
  Salida.init({
    cantidad_producto: DataTypes.INTEGER,
    cantidad_franela: DataTypes.INTEGER,
    orden: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Salida',
  });
  return Salida;
};