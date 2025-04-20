const express = require('express');
const router = express.Router();
const subject = require('../models/subject')

router.get('/',async(req, res) => {
    const subjects = await subject.findAll();
    res.json(subjects);
});

module.exports = router; 