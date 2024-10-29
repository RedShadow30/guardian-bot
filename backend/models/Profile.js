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
            message: 'Name must contain letters only'
        }
    },
    street: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        validate: {
            validator: function(v) {
                return /^[0-9A-Za-z\s]+$/.test(v); // Regex for letters only
            },
            message: 'Street must have numbers and letters only'
        }
    },
    city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
        validate: {
            validator: function(v) {
                return /^[A-Za-z\s]+$/.test(v); // Regex for letters only
            },
            message: 'City must contain letters only'
        }
    },
    state: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2,
        validate: {
            validator: function(v) {
                return /^[A-Z]+$/.test(v); // Regex for capital letters only
            },
            message: 'State must contain capital letters only'
        }
    },
    zipCode: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 5,
        validate: {
            validator: function(v) {
                return /^\d+$/.test(v); // Regex for digits only
            },
            message: 'Zip code must contain numbers only'
        }
    },
    contacts: {
        type: [String],
        required: true,
        validate: {
            validator: function(v) {
                return v.length > 0 && v.every(contact => /^\d+$/.test(contact)); // Ensure at least one contact is provided
            },
            message: 'At least one valid phone number is required.'
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
        street: Joi.string().min(5).max(255).pattern(/^[0-9A-Za-z\s]+$/).required(),
        city: Joi.string().min(3).max(25).pattern(/^[A-Za-z\s]+$/).required(),
        state: Joi.string().min(2).max(2).pattern(/^[A-Z]+$/).required(),
        zipCode: Joi.string().min(5).max(5).pattern(/^\d+$/).required(),
        contacts: Joi.array().items(Joi.string().pattern(/^\d+$/)).min(1).max(3).required(), // Needs at least one valid contact
        email: Joi.string().email().required() // Validate email
    });

    return schema.validate(profile);
}

exports.Profile = Profile;
exports.validate = validateProfile;