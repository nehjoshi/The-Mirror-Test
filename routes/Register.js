const schema = require('../models/UserModel');
const jwt = require('jsonwebtoken');
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

    const { email, name, password, userAgreesWithPrivacyPolicy } = req.body;

    const emailExists = await User.findOne({ email: email });
    if (emailExists) return res.json({ success: false, message: 'This email already exists!' });

    user.email = email;
    user.name = name;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    user.password = hashed;
    user.choseToSkipDetails = false;
    user.userAgreesWithPrivacyPolicy = userAgreesWithPrivacyPolicy;
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
        result: "",
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
        optScore: 0,
        hopeScore: 0,
        esteemScore: 0,
        optDesc: "",
        hopeDesc: "",
        esteemDesc: "",
        lastQ: 0,
        finished: false
    }
    user.quiz4 = {
        E: 0,
        A: 0,
        C: 0,
        N: 0,
        O: 0,
        E_score: 0,
        A_score: 0,
        C_score: 0,
        N_score: 0,
        O_score: 0,
        E_desc: "",
        A_desc: "",
        C_desc: "",
        N_desc: "",
        O_desc: "",
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
        PERMA: 0,
        lastQ: 0,
        finished: false
    }
    user.reg1 = {
        dob: null,
        weight: null,
        height: null,
        glasses: null,
        nationality: null,
        religion: null,
        smoke: null,
        drink: null,
        hobbies: null,
        physicalConditions: null,
        childhoodIllnesses: null
    };
    user.reg2 = {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null,
        q8: null,
        q9: null,
        q10: null,
        q11: null,
        q12: null
    };
    await user.save()
        .then(async resp => {
            const token = await jwt.sign(
                { id: name, result: 0 },
                process.env.SECRET_KEY,
                {
                    expiresIn: 10800,
                }
            );
            return res.json({ success: true, token: token, name: req.body.name });
        })
        .catch(e => {
            return res.json({ success: false, message: 'Please double check all the fields.' });
        })
});
module.exports = Register;