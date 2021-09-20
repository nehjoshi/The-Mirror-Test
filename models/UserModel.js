const mongoose = require('mongoose');

const validateEmail = email => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please enter a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    name: {
        type: String,
        required: 'Name is required'
    },
    password: {
        type: String,
        required: true,
    },
    resetToken: {
        type: String,
        required: false,
        expires: 60
    }
}, {timestamps: true, collection: 'The Mirror Test'});

module.exports = schema;