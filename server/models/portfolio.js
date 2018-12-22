'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    content: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING,
    like_count: DataTypes.INTEGER,
    has_article: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
  }, {});
  Portfolio.associate = function(models) {
    Portfolio.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
  };
  return Portfolio;
};
