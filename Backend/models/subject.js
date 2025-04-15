const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const subject = sequelize.define('subject', {
    subject_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
});

module.exports = subject;
