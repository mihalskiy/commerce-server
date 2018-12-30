'use strict';
module.exports = (sequelize, DataTypes) => {
  const PortfolioItem = sequelize.define('PortfolioItem', {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    desktopImg: DataTypes.STRING,
    tabletImg: DataTypes.STRING,
    mobileImg: DataTypes.STRING,
    description: DataTypes.TEXT,
    progress: DataTypes.INTEGER
  }, {});
  PortfolioItem.associate = function(models) {
    PortfolioItem.belongsTo(models.Portfolio, {
      foreignKey: 'portfolioId',
      onDelete: 'CASCADE',
    });
  };
  return PortfolioItem;
};
