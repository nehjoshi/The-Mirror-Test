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

router.post('/register-details2', async (req, res) => {
    const User = await mongoose.model('The Mirror Test', schema);
    const user = await User.findOne({ email: req.body.email });
    const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12 } = req.body;

    user.reg2 = { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12 };

    await user.save()
        .then(response => {
            return res.json({ success: true })
        })
});
module.exports = router;