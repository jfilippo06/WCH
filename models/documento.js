'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Documento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Documento.belongsTo(models.Cliente)
      Documento.belongsTo(models.Order)
    }
  }
  Documento.init({
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Documento',
  });
  return Documento;
};