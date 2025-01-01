'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productCategory.belongsTo(models.product, { foreignKey: 'productID' });
      productCategory.belongsTo(models.category, { foreignKey: 'categoryID' });
    }
  }
  productCategory.init({
    productCategoryID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    categoryID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productCategory',
  });
  return productCategory;
};