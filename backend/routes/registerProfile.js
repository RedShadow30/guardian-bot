const express = require('express');
const { Profile, validate } = require('../models/Profile'); // Import Profile model
const { User } = require('../models/User'); // Import User model
const router = express.Router();

// POST route for registering user profile
router.post('/', async (req, res) => {
    // Validate request body
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Look up user by email
    console.log('Finding user email in collection');
    const user = await User.findOne({ email: req.body.email });
    
    // If user's email is not authorized return not found
    if (!user) return res.status(400).send('User not found');
    console.log('User email found');

    // Check if the profile already exists
    let profile = await Profile.findOne({ email: req.body.email });
    if (profile) {
        console.log('Profile already exists');
        return res.status(200).send('Profile already exists'); // User can navigate to HomeScreen
    }

    console.log('Creating user profile...');
    // Create new profile if it doesn't exist
    profile = new Profile({
        fullName: req.body.fullName,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        contacts: req.body.contacts,
        email: user.email // Store user email as a reference
    });
    
    try {
        // Received correctly formatted inputs then create profile
        console.log('Created User Profile');
    
        await profile.save(); // Save the new profile
        res.status(201).send(profile); // Respond with the created profile
    }
    catch(error) {
        return res.status(400).send(error);
    }
});

// GET route to check if a user profile exists by email
router.get('/', async(req, res) => {
    console.log('Checking if profile exists...');

    const { email } = req.query;

    // request body did not send email then return error because need email to find profile
    if (!email) {
        console.log('Did not receive user email in request body');
        return res.status(400).json({ message: 'Email is required'});
    }

    try {
        const profile = await Profile.findOne({ email: email });

        // Profile exists then return exists property as true
        if(profile) {
            console.log('Profile found');
            return res.status(200).json({ exists: true, profile});
        }
        // Profile does not exist then return exists property as false
        else {
            console.log('Profile does not exist');
            return res.status(200).json({ exists: false });
        }
    }
    catch(error) {
        console.error('Error checking profile existence:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;