const express = require('express');
const router = express.Router();
const question = require('../models/question');

router.get('/',async(req,res) => {
    const questions = await question.findAll();
    res.json(questions);
})

module.exports = router;