'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      Produto.belongsTo(models.Categoria, { foreignKey: 'id_categoria', as: 'categoria' });
      Produto.belongsTo(models.Fornecedor, { foreignKey: 'id_fornecedor', as: 'fornecedor' });
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    preco: DataTypes.FLOAT,
    id_categoria: DataTypes.INTEGER,
    id_fornecedor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};
