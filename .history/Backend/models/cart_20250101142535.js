'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart.belongsTo(models.User, { foreignKey: 'userID' });
  cart.hasMany(models.cartItem, { foreignKey: 'cartID' });
    }
  }
  cart.init({
    cartID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};