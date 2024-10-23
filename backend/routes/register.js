const bcrypt = require('bcryptjs');
const _ = require('lodash');
const {User, validate} = require('../models/User');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async(req, res) => {
    // Validate request
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Look up user by email property, returns a promise so we use await
    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('User already registered');

    // Only interested in these two properties
    user = new User(_.pick(req.body, ['email', 'password']));
    
    // Hash the password
    // salt is a random string added to the hashed password so that hackers can't find patterns from gathering hashed info
    // Best practice to use async, higher number -> longer number -> harder to crack
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // Save the info for the client
    await user.save();
    console.log('User Credentials added to database');
    
    res.send(_.pick(user, ['email']));
});

module.exports = router;