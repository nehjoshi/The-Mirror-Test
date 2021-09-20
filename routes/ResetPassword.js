const schema = require('../models/UserModel.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const validator = require('email-validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');


router.post('/reset_password', async (req, res) => {
    const User = await mongoose.model("The Mirror Test", schema);
    const { email } = req.body;
    const valid = validator.validate(email);
    if (valid) {
        const user = await User.findOne({ email: email })
        if (user) {
            const resetToken = await crypto.randomBytes(32).toString("hex");
            const user = await User.findOne({ email: email });
            user.resetToken = resetToken;
            const resetURL = `http://localhost:3000/reset_password/${resetToken}`;
            await user.save()
                .then(async resp => {
                    const transporter = nodemailer.createTransport({
                        port: 465,
                        host: 'smtp.gmail.com',
                        auth: {
                            user: process.env.UNAME,
                            pass: process.env.PASSWORD
                        },
                        secure: true
                    });
                    const mailData = {
                        from: process.env.UNAME,
                        to: email,
                        subject: 'Reset Password for your Jivan Safalya Account',
                        text: 'Jivan Safalya Password Reset',
                        html: `Go to the following link to reset your password: ${resetURL}`
                    }
                    transporter.sendMail(mailData, (err, info) => {
                        if (err) console.log(err);
                        else console.log(info);
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
});

router.get('/verify_token/:resetToken', async (req, res) => {
    const User = await mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({ resetToken: req.params.resetToken });
    if (user) return res.json({ success: true });
    else return res.json({ success: false });
});
router.post('/verify_token/:resetToken', async (req, res) => {
    const { password } = req.body;
    const User = await mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({ resetToken: req.params.resetToken });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    user.password = hashed;
    user.resetToken = "";

    await user.save()
    .then(resp => {
        console.log('success');
        return res.json({success: true});
    })
    .catch(e => {
        return res.json({success: false});
    })

})

module.exports = router;