const schema = require('../models/UserModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Login = express.Router();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 60,
    max: 100
})
Login.use(limiter);
Login.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    next();
  });

Login.post('/login', async (req, res) => {
    const User = await mongoose.model('The Mirror Test', schema);
    
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
              
              return res.json({ success: true, token: token, name: emailExists.name });
        }
        else return res.json({success: false});
    }
    else return res.json({success: false});

});
module.exports = Login;
