const schema = require('../models/UserModel');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 60,
    max: 100
})
router.use(limiter);

router.post('/register-details1', async (req, res) => {
    const User = await mongoose.model('The Mirror Test', schema);
    const user = await User.findOne({ email: req.body.email });
    if (req.body.skipped === true) {
        user.choseToSkipDetails = true;
        await user.save()
            .then(response => {
                return res.json({ success: true })
            })
    }
    else {
        const {
            dob,
            weight,
            height,
            glasses,
            nationality,
            religion,
            smoke,
            drink,
            hobbies,
            physicalConditions,
            childhoodIllnesses
        } = req.body;

        user.reg1 = {
            dob: dob.toString(),
            weight,
            height,
            glasses,
            nationality,
            religion,
            smoke,
            drink,
            hobbies,
            physicalConditions,
            childhoodIllnesses
        };

        await user.save()
            .then(response => {
                return res.json({ success: true })
            })
    }
});

module.exports = router;