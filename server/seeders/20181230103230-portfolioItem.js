'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PortfolioItems', [
      {name: "Integer In Magna Institute", progress: 48, portfolioId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: "Duis Elementum Industries", progress: 98, portfolioId: 3, createdAt: new Date(), updatedAt: new Date()},
      {name: "Libero Mauris Aliquam Associates", progress: 16, portfolioId: 5, createdAt: new Date(), updatedAt: new Date()},
      {name: "Etiam Ligula LLP", progress: 54, portfolioId: 13, createdAt: new Date(), updatedAt: new Date()},
      {name: "Mi Fringilla Mi PC", progress: 59, portfolioId: 13, createdAt: new Date(), updatedAt: new Date()},
      {name: "Porttitor Scelerisque Neque Institute", progress: 2, portfolioId: 14, createdAt: new Date(), updatedAt: new Date()},
      {name: "Mi Felis Consulting", progress: 88, portfolioId: 4, createdAt: new Date(), updatedAt: new Date()},
      {name: "Vulputate Velit Foundation", progress: 25, portfolioId: 9, createdAt: new Date(), updatedAt: new Date()},
      {name: "Nonummy Fusce Fermentum Incorporated", progress: 6, portfolioId: 4, createdAt: new Date(), updatedAt: new Date()},
      {name: "Egestas Inc.", progress: 41, portfolioId: 7, createdAt: new Date(), updatedAt: new Date()},
      {name: "Ornare Lectus Justo Foundation", progress: 12, portfolioId: 8, createdAt: new Date(), updatedAt: new Date()},
      {name: "Ut Nec LLP", progress: 33, portfolioId: 17, createdAt: new Date(), updatedAt: new Date()},
      {name: "Sagittis Duis Gravida LLP", progress: 75, portfolioId: 9, createdAt: new Date(), updatedAt: new Date()},
      {name: "Hendrerit A Arcu PC", progress: 64, portfolioId: 10, createdAt: new Date(), updatedAt: new Date()},
      {name: "Neque Limited", progress: 1, portfolioId: 11, createdAt: new Date(), updatedAt: new Date()},
      {name: "Rutrum Eu Foundation", progress: 8, portfolioId: 9, createdAt: new Date(), updatedAt: new Date()},
      {name: "Vel Faucibus Id PC", progress: 57, portfolioId: 12, createdAt: new Date(), updatedAt: new Date()},
      {name: "Aliquet Metus Urna Inc.", progress: 55, portfolioId: 16, createdAt: new Date(), updatedAt: new Date()},
      {name: "Malesuada Id Erat LLC", progress: 85, portfolioId: 13, createdAt: new Date(), updatedAt: new Date()},
      {name: "Eu Tellus Phasellus Associates", progress: 79, portfolioId: 9, createdAt: new Date(), updatedAt: new Date()},
      {name: "At Velit Pellentesque Industries", progress: 61, portfolioId: 14, createdAt: new Date(), updatedAt: new Date()},
      {name: "Montes Institute", progress: 72, portfolioId: 15, createdAt: new Date(), updatedAt: new Date()},
      {name: "Convallis Limited", progress: 60, portfolioId: 17, createdAt: new Date(), updatedAt: new Date()},
      {name: "Volutpat Corporation", progress: 67, portfolioId: 18, createdAt: new Date(), updatedAt: new Date()}


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
