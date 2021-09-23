const mongoose = require('mongoose');

const validateEmail = email => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const Quiz2Schema = new mongoose.Schema({
    result1: Number,
    result2: Number,
    result3: Number,
    result4: Number
});
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
    quiz1: {
        type: Number,
        required: false,
    },
    quiz2: Quiz2Schema, 
    quiz3: {
        type: Array,
        required: false,
    },
    quiz4: {
        type: Array,
        required: false,
    },
    quiz5: {
        type: Array,
        required: false,
    },
    completed: {
        type: Boolean,
        required: false,
    },
    resetToken: {
        type: String,
        required: false,
        expires: 60
    }
}, {timestamps: true, collection: 'The Mirror Test'});

module.exports = schema;