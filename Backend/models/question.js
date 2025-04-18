const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const question = sequelize.define('question', {
    question_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'subjects', 
        key: 'id' 
      },
    },
    question_text: {
        type: DataTypes.STRING,
        allowNull: false
      },
});

module.exports = question;
