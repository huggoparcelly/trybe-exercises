'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', 
  [
    {
      title: 'Livro dos books',
      author: 'Author desconhecido',
      pageQuantity: 1035,
      createdAt: new Date()
    },
    {
      title: 'O código',
      author: 'Author desconhecido',
      pageQuantity: 150,
      createdAt: new Date()
    },
  ], {}),

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
