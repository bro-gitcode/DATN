'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('shipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shipmentID: {
        type: Sequelize.INTEGER
      },
      orderID: {
        type: Sequelize.INTEGER
      },
      trackingCode: {
        type: Sequelize.STRING
      },
      carrier: {
        type: Sequelize.STRING
      },
      shipmentCost: {
        type: Sequelize.DECIMAL
      },
      shipmentStatus: {
        type: Sequelize.STRING
      },
      estimatedDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('shipments');
  }
};