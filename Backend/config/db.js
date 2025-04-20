const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('quiz_management', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
