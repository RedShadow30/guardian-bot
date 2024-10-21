const express = require('express');
const router = express.Router();
const {Profile} = require('../models/Profile');

router.get('/', (req, res) => {
    console.log('Reached get request');
});

module.exports = router;