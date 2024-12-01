const Joi = require('joi');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const {User} = require('../models/User');
const express = require('express');
const router = express.Router();

router.post('/', async(req, res) => {
    console.log(req.body.data);
    
    // Validate request
    const { error } = validate(req.body);   
    if(error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'});
    }        

    // Look up user by email property, returns a promise so we use await
    let user = await User.findOne({ email: req.body.data.email });
    // Don't have user then send broad 400 error to client
    if(!user) return res.status(400).json({message: 'Invalid email or password'});

    // Decrypt password (request password compared to hashed password)
    const validPassword = await bcrypt.compare(req.body.data.password, user.password);
    if(!validPassword) return res.status(400).json({message: 'Invalid email or password'});

    // Valid login
    res.json({success: true});
});

function validate(req) {       
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    return schema.validate(req.data);
}

module.exports = router;