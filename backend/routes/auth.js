const Joi = require('joi');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const {User} = require('../user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async(req, res) => {
    // Validate request
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Look up user by email property, returns a promise so we use await
    let user = await User.findOne({ email: req.body.email });
    // Don't have user then send broad 400 error to client
    if(!user) return res.status(400).send('Invalid email or password');

    // Decrypt password (request password compared to hashed password)
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid email or password');

    // Valid login
    res.send(true);
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    return schema.validate(req);
}

module.exports = router;