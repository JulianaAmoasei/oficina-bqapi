'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'Senhor dos Anéis',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Terramar',
        price: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Modao Zushi',
        price: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
