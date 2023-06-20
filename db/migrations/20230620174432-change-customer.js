'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('customers', "name", { type: Sequelize.DataTypes.STRING })
    await queryInterface.changeColumn('customers', "last_name", { type: Sequelize.DataTypes.STRING })
  },

  async down (queryInterface) {

  }
};
