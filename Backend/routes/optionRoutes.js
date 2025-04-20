const express = require('express');
const router = express.Router();
const option = require('../models/options');

router.get('/', async (req, res) => {
    const { question_id } = req.query;
    let where = {};
    if (question_id) {
      where.question_id = question_id;
    }
    const options = await option.findAll({ where });
    res.json(options);
  });
  

module.exports = router;