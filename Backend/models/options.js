// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");

// const option = sequelize.define("option", {
//   option_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   question_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: "questions",
//       key: "id",
//     },
//   },
//   option_text: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   is_correct: {
//     type: DataTypes.TINYINT,
//     allowNull: false,
//   },
// });

// module.exports = option;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Option = sequelize.define('option', {
  option_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'questions', // Make sure this matches your question table name
      key: 'question_id'
    }
  },
  option_text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  tableName: 'options', // Ensure this matches your actual table name in MySQL
  timestamps: false
});

module.exports = Option;
