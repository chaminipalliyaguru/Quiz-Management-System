const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('subject', {
    question_id: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER,
    question_text: DataTypes.STRING,
});

module.exports = question;
