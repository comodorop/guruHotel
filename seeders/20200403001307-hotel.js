'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hotels', [
      {
        id: "c1b12742-f8f2-4555-a08e-598959b4d13a",
        name: "TRS",
        location: "Rivera maya",
        start: 5,
        id_restaurant: "bf09e2f9-ff22-45f2-b5f6-ef73f7d435eb"
      },
      {
        id: "080750c5-0b1f-4ebc-a7bc-afb407befd77",
        name: "Barcelo",
        location: "Rivera maya",
        start: 4,
        id_restaurant: "593bc44e-5a53-4aa4-a135-8abf4e893224"
      },
      {
        id: "7c97bdc1-e49f-4840-8117-881948dae1ed",
        name: "Ibero Start",
        location: "Rivera maya",
        start: 2,
        id_restaurant: "21736e98-7578-46b2-9e95-36fe67ca99c9"
      },
      {
        id: "d3e09f01-b0c0-469f-9afc-2558085bb7ff",
        name: "Secret Aura",
        location: "Rivera maya",
        start: 5,
        id_restaurant: "4ebc9c55-b34d-4f8c-b8de-9972039d609f"
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
