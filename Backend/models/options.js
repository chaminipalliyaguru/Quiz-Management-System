const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('subject', {
    option_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    option_text: DataTypes.STRING,
    is_correct: DataTypes.TINYINT,
});

module.exports = question;