const express = require('express');
const router = express.Router();
const question = require('../models/question');

router.get('/', async (req, res) => {
    const { subject_id } = req.query;
    let where = {};
    if (subject_id) {
      where.subject_id = subject_id;
    }
    const questions = await question.findAll({ where });
    res.json(questions);
  });
  

module.exports = router;