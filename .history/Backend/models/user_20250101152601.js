'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.cart, { foreignKey: 'userID' });
  User.hasMany(models.order, { foreignKey: 'userID' });
  User.hasMany(models.rating, { foreignKey: 'userID' });
  User.hasMany(models.wishList, { foreignKey: 'userID' });
    }
  }
  User.init({
    userID: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
    role:{
      type:DataTypes.INTEGER
    } ,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};