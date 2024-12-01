const express = require('express');
const { Profile, validate } = require('../models/Profile'); // Import Profile model
const { User } = require('../models/User'); // Import User model
const router = express.Router();

// POST route for registering user profile
router.post('/', async (req, res) => {
    const request = req.body.data;
    console.log('POST Req for Profile: ' + req.body.data);
    

    // Validate request body
    const { error } = validate(request);
    if(error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'});
    }

    // Look up user by email
    console.log('Finding user email in collection');
    const user = await User.findOne({ email: request.email });
    
    // If user's email is not authorized return not found
    if (!user) return res.status(400).send('User not found');
    console.log('User email found');

    // Check if the profile already exists
    let profile = await Profile.findOne({ email: request.email });
    if (profile) {
        console.log('Profile already exists');
        return res.status(200).send('Profile already exists'); // User can navigate to HomeScreen
    }

    console.log('Creating user profile...');
    // Create new profile if it doesn't exist
    profile = new Profile({
        fullName: request.fullName,
        university: request.university,
        residence: request.residence,
        floor: request.floor,
        room: request.room,
        contacts: request.contacts,
        email: user.email 
    });
    
    try {
        // Received correctly formatted inputs then create profile and return 200 status code
        await profile.save(); 
        console.log('Created User Profile');
        
        res.status(200).send(profile); 
        
    }
    catch(error) {
        return res.status(400).send('Error saving profile: ' + error.message); // General error message
    }
});

// GET route to check if a user profile exists by email
router.get('/', async(req, res) => {
    console.log('Checking if profile exists...');

    console.log(req.query);
    
    const { email } = req.query;

    // Fetch request must send email
    if (!email) {
        console.log('Did not receive user email');
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
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;