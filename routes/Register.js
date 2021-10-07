const schema = require('../models/UserModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Register = express.Router();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 60,
    max: 100
})
Register.use(limiter);

Register.post('/register', async (req, res) => {
    const User = await mongoose.model('The Mirror Test', schema);
    const user = new User;

    const { email, name, password } = req.body;

    const emailExists = await User.findOne({ email: email });
    if (emailExists) return res.json({ success: false, message: 'This email already exists!' });

    user.email = email;
    user.name = name;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    user.password = hashed;
    user.quiz1 = {
        result: 0,
        lastQ: 0,
        finished: false
    }
    user.quiz2 = {
        result1: 0,
        result2: 0,
        result3: 0,
        result4: 0,
        lastQ: 0,
        finished: false
    }
    user.quiz3 = {
        pmb: 0,
        pvb: 0,
        psb: 0,
        pmg: 0,
        pvg: 0,
        psg: 0,
        lastQ: 0,
        finished: false
    }
    user.quiz4 = {
        E: 0,
        A: 0,
        C: 0,
        N: 0,
        O: 0,
        lastQ: 0,
        finished: false
    }
    user.quiz5 = {
        P: 0,
        E: 0,
        R: 0,
        M: 0,
        A: 0,
        N: 0,
        HAP: 0,
        H: 0,
        LON: 0,
        lastQ: 0,
        finished: false
    }
    await user.save()
        .then(resp => {
            return res.json({ success: true });
        })
        .catch(e => {
            return res.json({ success: false, message: 'Please double check all the fields.' });
        })
});
module.exports = Register;