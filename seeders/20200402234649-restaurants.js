'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [
      {
        id: "bf09e2f9-ff22-45f2-b5f6-ef73f7d435eb",
        name: 'Mugaritz',
        description: 'Food Spanish'
      },
      {
        id: "593bc44e-5a53-4aa4-a135-8abf4e893224",
        name: 'Pujol',
        description: 'Food Mexican'
      },
      {
        id: "21736e98-7578-46b2-9e95-36fe67ca99c9",
        name: 'Biko',
        description: 'Food Mexican'
      },
      {
        id: "4ebc9c55-b34d-4f8c-b8de-9972039d609f",
        name: 'Alinea',
        description: 'Food American'
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
