const schema = require('../models/UserModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Register = express.Router();

Register.post('/register', async (req, res) => {
    const User = await mongoose.model('The Mirror Test', schema);
    const user = new User;

    const { email, name, password } = req.body;

    const emailExists = await User.findOne({email: email});
    if (emailExists) return res.json({success: false, message: 'This email already exists!'});

    user.email = email;
    user.name = name;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    user.password = hashed;

    await user.save()
        .then(resp => {
            return res.json({ success: true });
        })
        .catch(e => {
            return res.json({success: false, message: 'Please double check all the fields.'});
        })
});
module.exports = Register;