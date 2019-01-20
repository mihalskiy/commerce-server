'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    bgImage: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT,
    url: DataTypes.TEXT,
    type: {
      type: DataTypes.TEXT
    },

  }, {});
  Portfolio.associate = function(models) {
    Portfolio.hasMany(models.PortfolioItem, {
      foreignKey: 'portfolioId',
      as: 'PortfolioItems',
    });
  };
  return Portfolio;
};
