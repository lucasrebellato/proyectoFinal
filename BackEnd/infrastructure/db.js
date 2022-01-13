const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('OrigenEcoAlmacen', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports = sequelize;