'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fornecedor extends Model {
    static associate(models) {
      Fornecedor.hasMany(models.Produto, { foreignKey: 'id_fornecedor', as: 'produtos' });
    }
  }
  Fornecedor.init({
    nome: DataTypes.STRING,
    contato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fornecedor',
  });
  return Fornecedor;
};
