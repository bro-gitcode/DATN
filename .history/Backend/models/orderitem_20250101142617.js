'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orderItem.belongsTo(models.order, { foreignKey: 'orderID' });
      orderItem.belongsTo(models.product, { foreignKey: 'productID' });
    }
  }
  orderItem.init({
    orderItemID: DataTypes.INTEGER,
    orderID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    itemStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orderItem',
  });
  return orderItem;
};