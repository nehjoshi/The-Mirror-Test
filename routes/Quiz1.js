const express = require("express");
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');
const Quiz1 = express.Router();

Quiz1.post("/quiz1", async (req, res) => {
    const User = await mongoose.model("The Mirror Test", schema);
    let { ans, result, done, email, qno } = req.body;
    const user = await User.findOne({ email: email })
    result += ans;
    user.quiz1 = {
        result: result,
        lastQ: qno,
        resultDesc: "",
        finished: done ? true : false
    }

    if (done) {
        if (result >= 4) {
            user.quiz1.resultDesc = "Having an ACE score of 4 increases the risk of emphysema or chronic bronchitis by nearly 400 percent, and attempted suicide by 1200 percent. People with high ACE scores are more likely to be violent, to have more marriages, more broken bones, more drug prescriptions, more depression, and more autoimmune diseases. People with an ACE score of 6 or higher are at risk of their lifespan being shortened by 20 years.";
        }
        else {
            user.quiz1.resultDesc = "Your ACE score indicates that you have a secure childhood. People with ACE scores greater than 4 are more likely to commit to drugs and alcohol and have unsuccessful relationships. They are also more prone to committing suicide.";
        }
    }
    await user.save()
        .then(resp => {
            return res.json({ success: true, result: result });
        })
        .catch(e => {
            return res.json({ success: false });
        })
});
module.exports = Quiz1;