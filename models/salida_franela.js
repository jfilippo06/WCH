'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salida_franela extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Salida_franela.belongsTo(models.Cliente)
      Salida_franela.belongsTo(models.Franela)
      Salida_franela.belongsTo(models.Order)
    }
  }
  Salida_franela.init({
    franela: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    unidad: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Salida_franela',
  });
  return Salida_franela;
};