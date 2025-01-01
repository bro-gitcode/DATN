'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wishList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      wishList.belongsTo(models.User, { foreignKey: 'userID' });
      wishList.belongsTo(models.product, { foreignKey: 'productID' });
    }
  }
  wishList.init({
    wishListID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wishList',
  });
  return wishList;
};