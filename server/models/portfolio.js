'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    bgColor: DataTypes.STRING,
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: {
      type: DataTypes.TEXT
    },
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
