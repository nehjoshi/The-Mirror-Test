const express = require("express");
const Quiz4 = express.Router();
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');

Quiz4.post('/quiz4', async (req, res) => {
    let { type, value, result, done, email } = req.body;
    //Here type will represent extroversion, agreeableness, conscientiousness, neuroticism, or openess
    const User = await mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({ email: email })

    switch (type) {
        case 'e':
            result.e += value;
        case 'a':
            result.a += value;
        case 'c':
            result.c += value;
        case 'n':
            result.n += value;
        case 'o':
            result.o += value;
    }
    user.quiz4 = {
        E: result.e,
        A: result.a,
        C: result.c,
        N: result.n,
        O: result.o,
        lastQ: user.quiz4.lastQ + 1,
        finished: done ? true : false
    }

    await user.save()
        .then()
        .catch(e => {
            return res.json({ success: false });
        })
    return res.json({ success: true, result: result });

});
module.exports = Quiz4;