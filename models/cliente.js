'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cliente.hasOne(models.Documento)
      Cliente.hasOne(models.Factura_franela)
      Cliente.hasOne(models.Factura_producto)
      Cliente.hasOne(models.Salida_franela)
      Cliente.hasOne(models.Salida_producto)
    }
  }
  Cliente.init({
    nombre: DataTypes.STRING,
    cedula: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};