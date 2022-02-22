const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    }
}, {timestamps: true, collection: 'Feedback'});

module.exports = schema;