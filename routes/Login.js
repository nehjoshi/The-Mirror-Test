const schema = require('../models/UserModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Login = express.Router();

Login.post('/login', async (req, res) => {
    const User = await mongoose.model('The Mirror Test', schema);
    console.log('good');
    const { email, password } = req.body;

    const emailExists = await User.findOne({email: email});
    if (emailExists){
        const check = await bcrypt.compare(password, emailExists.password);
        if (check) {
            const token = await jwt.sign(
                { id: emailExists._id, result: 0 },
                process.env.SECRET_KEY,
                {
                  expiresIn: 10800,
                }
              );
              
              return res.json({ success: true, token: token });
        }
        else return res.json({success: false});
    }
    else return res.json({success: false});

});
module.exports = Login;
