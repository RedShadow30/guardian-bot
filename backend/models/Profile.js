const Joi = require('joi');
const mongoose = require('mongoose');

const Profile = mongoose.model('Profile', new mongoose.Schema({
    fullName: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        validate: {
            validator: function(v) {
                return /^[A-Za-z\s]+$/.test(v); // Regex for letters only
            },
        }
    },
    university: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 3,
        validate: {
            validator: function(v) {
                return /^[A-Z\s]+$/.test(v); // Regex for capital letters only
            },
        }
    },
    residence: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 25,
        validate: {
            validator: function(v) {
                return /^[A-Za-z\s]+$/.test(v); // Regex for letters only
            },
        }
    },
    floor: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2,
        validate: {
            validator: function(v) {
                return /^\d+$/.test(v); // Regex for digits only
            },
        }
    },
    room: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 3,
        validate: {
            validator: function(v) {
                return /^\d+$/.test(v); // Regex for digits only
            },
        }
    },
    contacts: {
        type: [String],
        required: true,
        validate: {
            validator: function(v) {
                return v.length > 0 && v.every(contact => /^\d+$/.test(contact)); // Ensure at least one contact is provided
            },
        }
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure unique email for profiles as this is the 'key'
    }
}));

function validateProfile(profile) {
    const schema = Joi.object({
        fullName: Joi.string().min(5).max(255).pattern(/^[A-Za-z\s]+$/).required(),
        university: Joi.string().min(3).max(3).pattern(/^[A-Z\s]+$/).required(),
        residence: Joi.string().min(6).max(25).pattern(/^[A-Za-z\s]+$/).required(),
        floor: Joi.string().min(1).max(2).pattern(/^\d+$/).required(),
        room: Joi.string().min(1).max(3).pattern(/^\d+$/).required(),
        contacts: Joi.array().items(Joi.string().pattern(/^\d+$/)).min(1).max(3).required(), // Needs at least one valid contact
        email: Joi.string().email().required() // Validate email
    });

    return schema.validate(profile);
}

exports.Profile = Profile;
exports.validate = validateProfile;