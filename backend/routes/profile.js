const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { Profile } = require('../models/Profile');

// GET route to retrieve user profile by email
router.get('/', async(req, res) => {
    console.log('Getting profile');

    try {
        // Store the email sent through fetch request from Profile.jsx
        const email = req.query.email;
        console.log('Searching for email: ', email);
        
        // Find a user with this email
        const user = await User.findOne({ email: email });
        console.log('Found user');
        
        // Return error if not found
        if(!user) {
            console.log('User not found');
            return res.status(404).json({ error: 'User not found' });
        }

        // Find the profile of user with given email
        const profile = await Profile.findOne({ email: email });
        if(!profile) {
            console.log('Profile not found for email: ', email);
            return res.status(404).json({ error: 'Profile not found' });
        }

        // If profile found, return in JSON format
        console.log('Profile found:', profile);
        res.json(profile);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;