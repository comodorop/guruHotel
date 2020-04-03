'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rooms', [
      {
        id: "8e9631bd-140f-4a99-a70e-b7f6420abfd5",
        idHotel: "c1b12742-f8f2-4555-a08e-598959b4d13a",
        name: "Suite junior",
        description: "Para 2 personas",
        capacity: 5,
        number: 64
      },
      {
        id: "da9d10ec-8043-49ae-b701-14b2b8170e4c",
        idHotel: "080750c5-0b1f-4ebc-a7bc-afb407befd77",
        name: "Suite junior",
        description: "Para 2 personas",
        capacity: 5,
        number: 64
      },
      {
        id: "d10795a4-a46b-45ed-8488-906681dbcca8",
        idHotel: "080750c5-0b1f-4ebc-a7bc-afb407befd77",
        name: "Suite junior",
        description: "Para 2 personas",
        capacity: 5,
        number: 64
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
