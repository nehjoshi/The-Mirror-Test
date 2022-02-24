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
        if (result === 0) {
            user.quiz1.resultDesc = "This is a very good score. However, not everyone is as lucky as you are! Around 64% of people have ACE score of at least 1 and and 12.5% (6 in 1 people) have ACE score 4 or more. Because a higher is score is linked to chronic diseases, mental illness, risky behaviours and early death, you can help your family, friends and people you know, by spreading awareness about ACEs.";
        }
        else if (result > 0 && result < 4) {
            user.quiz1.resultDesc = "If you don't have any associated health conditions, you fall into a low risk category. If you have any associated health conditions as well, you should seek medical help.";
        }
        else {
            user.quiz1.resultDesc = "Unfortunately, you fall into high risk category for toxic stress and its consequences. Because an ACE score like this is linked to chronic diseases, mental illness, risky behaviours and early death, you should seek medical help as soon as possible.";
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