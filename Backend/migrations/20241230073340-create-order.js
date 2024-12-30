'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderID: {
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER
      },
      paymentID: {
        type: Sequelize.INTEGER
      },
      orderStatus: {
        type: Sequelize.STRING
      },
      totalPrice: {
        type: Sequelize.DECIMAL
      },
      shipAddress: {
        type: Sequelize.TEXT
      },
      shipStatus: {
        type: Sequelize.STRING
      },
      deliveryDate: {
        type: Sequelize.DATE
      },
      totalQuantity: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};