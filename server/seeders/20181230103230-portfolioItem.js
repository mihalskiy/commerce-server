'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('PortfolioItems', [
      {
        name: "Ac LLP",
        progress: 99,
        portfolioId: 63,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Suspendisse Ltd",
        progress: 10,
        portfolioId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mus Proin Vel Ltd",
        progress: 31,
        portfolioId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tincidunt Ltd",
        progress: 38,
        portfolioId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Eget Ipsum Industries",
        progress: 99,
        portfolioId: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Duis Dignissim Associates",
        progress: 31,
        portfolioId: 54,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cursus Luctus LLC",
        progress: 67,
        portfolioId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Eget Volutpat Company",
        progress: 79,
        portfolioId: 48,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nunc Laoreet Lectus Ltd",
        progress: 53,
        portfolioId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Curabitur Dictum PC",
        progress: 87,
        portfolioId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Proin Sed Turpis LLC",
        progress: 100,
        portfolioId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Posuere Vulputate Company",
        progress: 70,
        portfolioId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sit Amet Corp.",
        progress: 37,
        portfolioId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Phasellus In Felis Corp.",
        progress: 35,
        portfolioId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "In Dolor Fusce LLP",
        progress: 52,
        portfolioId: 46,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hendrerit A Corp.",
        progress: 33,
        portfolioId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Magnis Dis Consulting",
        progress: 93,
        portfolioId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lorem Ipsum LLC",
        progress: 80,
        portfolioId: 49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Praesent Eu Industries",
        progress: 22,
        portfolioId: 49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Risus Donec Egestas Limited",
        progress: 72,
        portfolioId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Porttitor Scelerisque Consulting",
        progress: 19,
        portfolioId: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sagittis Limited",
        progress: 69,
        portfolioId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fames LLC",
        progress: 17,
        portfolioId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Adipiscing Enim Mi Inc.",
        progress: 84,
        portfolioId: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Blandit Enim Consequat LLC",
        progress: 98,
        portfolioId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ante Limited",
        progress: 3,
        portfolioId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Felis Ullamcorper Viverra Incorporated",
        progress: 56,
        portfolioId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Auctor Odio A Corp.",
        progress: 93,
        portfolioId: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sit Amet Consectetuer Corporation",
        progress: 20,
        portfolioId: 52,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sem Vitae Aliquam LLC",
        progress: 87,
        portfolioId: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mauris LLC",
        progress: 47,
        portfolioId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Arcu Iaculis Corp.",
        progress: 89,
        portfolioId: 66,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nullam Vitae Corporation",
        progress: 16,
        portfolioId: 44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tempor Foundation",
        progress: 39,
        portfolioId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Diam At Pretium Industries",
        progress: 73,
        portfolioId: 67,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sed Molestie Sed Limited",
        progress: 39,
        portfolioId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Elit Curabitur Company",
        progress: 20,
        portfolioId: 65,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Purus Mauris Inc.",
        progress: 22,
        portfolioId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Convallis Erat Eget Corp.",
        progress: 15,
        portfolioId: 63,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fames Limited",
        progress: 23,
        portfolioId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sollicitudin LLC",
        progress: 31,
        portfolioId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nulla Tempor Institute",
        progress: 73,
        portfolioId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vitae Aliquam Corp.",
        progress: 29,
        portfolioId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nunc Lectus Pede Corp.",
        progress: 61,
        portfolioId: 56,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Felis Ullamcorper Limited",
        progress: 86,
        portfolioId: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Morbi Tristique Senectus Inc.",
        progress: 45,
        portfolioId: 43,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Luctus LLP",
        progress: 90,
        portfolioId: 46,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dui Nec Urna Associates",
        progress: 96,
        portfolioId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ligula Nullam PC",
        progress: 31,
        portfolioId: 57,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Accumsan Neque Incorporated",
        progress: 92,
        portfolioId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vulputate Ullamcorper Magna Incorporated",
        progress: 19,
        portfolioId: 61,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Duis Ac Corp.",
        progress: 11,
        portfolioId: 66,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nullam Incorporated",
        progress: 24,
        portfolioId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Luctus Inc.",
        progress: 73,
        portfolioId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "A Felis Ullamcorper Company",
        progress: 77,
        portfolioId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vitae Velit Corp.",
        progress: 31,
        portfolioId: 64,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nunc Est Mollis Institute",
        progress: 74,
        portfolioId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sagittis Lobortis Associates",
        progress: 44,
        portfolioId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Luctus Corp.",
        progress: 48,
        portfolioId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ac Limited",
        progress: 36,
        portfolioId: 61,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Placerat Foundation",
        progress: 29,
        portfolioId: 44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Erat Limited",
        progress: 71,
        portfolioId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Amet Faucibus Industries",
        progress: 82,
        portfolioId: 48,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sapien Cras Associates",
        progress: 44,
        portfolioId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Penatibus Et Consulting",
        progress: 1,
        portfolioId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Massa Consulting",
        progress: 81,
        portfolioId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Etiam Vestibulum LLC",
        progress: 32,
        portfolioId: 51,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dolor Corp.",
        progress: 74,
        portfolioId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Justo Foundation",
        progress: 30,
        portfolioId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ullamcorper Nisl Company",
        progress: 59,
        portfolioId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hendrerit Donec Porttitor Company",
        progress: 73,
        portfolioId: 53,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ut Inc.",
        progress: 73,
        portfolioId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ipsum Primis In Limited",
        progress: 1,
        portfolioId: 62,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dignissim Lacus Incorporated",
        progress: 12,
        portfolioId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Primis In Incorporated",
        progress: 28,
        portfolioId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "In PC",
        progress: 79,
        portfolioId: 48,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Et Tristique Industries",
        progress: 96,
        portfolioId: 67,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Integer Sem Corp.",
        progress: 32,
        portfolioId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Montes Nascetur Inc.",
        progress: 27,
        portfolioId: 43,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "In Mi Pede Associates",
        progress: 10,
        portfolioId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sed Orci Lobortis Associates",
        progress: 53,
        portfolioId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Amet Nulla Donec Foundation",
        progress: 52,
        portfolioId: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rutrum Magna Cras Institute",
        progress: 4,
        portfolioId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tellus Associates",
        progress: 41,
        portfolioId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Aliquam Adipiscing Inc.",
        progress: 35,
        portfolioId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nonummy Ipsum Corporation",
        progress: 49,
        portfolioId: 67,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mauris Integer Sem PC",
        progress: 42,
        portfolioId: 44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nisl Foundation",
        progress: 49,
        portfolioId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "In Lobortis Tellus Corporation",
        progress: 12,
        portfolioId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Iaculis Inc.",
        progress: 71,
        portfolioId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mi Ac Associates",
        progress: 88,
        portfolioId: 64,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sem Vitae LLC",
        progress: 16,
        portfolioId: 67,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Eget Mollis Lectus Inc.",
        progress: 72,
        portfolioId: 67,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "In Cursus Et Associates",
        progress: 65,
        portfolioId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nunc Ullamcorper Associates",
        progress: 56,
        portfolioId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Phasellus Libero Company",
        progress: 60,
        portfolioId: 51,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Non Luctus Corporation",
        progress: 37,
        portfolioId: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Elementum Lorem Incorporated",
        progress: 71,
        portfolioId: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Elit Corporation",
        progress: 82,
        portfolioId: 48,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fringilla Donec Associates",
        progress: 23,
        portfolioId: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      }


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
