'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.brand, { foreignKey: 'brandID' });
      product.hasMany(models.image, { foreignKey: 'productID' });
      product.hasMany(models.variant, { foreignKey: 'productID' });
      product.hasMany(models.cartItem, { foreignKey: 'productID' });
      product.hasMany(models.orderItem, { foreignKey: 'productID' });
      product.hasMany(models.rating, { foreignKey: 'productID' });
      product.hasMany(models.wishList, { foreignKey: 'productID' });
      product.belongsToMany(models.category, {
        through: models.productCategory,
        foreignKey: 'productID',
      });
    }
  }
  product.init({
    productID: DataTypes.INTEGER,
    category: DataTypes.STRING,
    brandID: DataTypes.STRING,
    productName: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};