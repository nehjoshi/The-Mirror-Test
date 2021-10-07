const express = require("express");
const Quiz2 = express.Router();
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');

Quiz2.post("/quiz2", async (req, res) => {
    let { ans, result, type, done, email } = req.body;       //Type will represent the type of personality:
    const User = await mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({ email: email })

    switch (type) {         //1: Secure; 2: Anxious; 3: Avoidant; 4: Disorganized
        case 1:
            result.result1 += ans;
            break;
        case 2:
            result.result2 += ans;
            break;
        case 3:
            result.result3 += ans;
            break;
        case 4:
            result.result4 += ans;
            break;
    }

    user.quiz2 = {
        result1: result.result1,
        result2: result.result2,
        result3: result.result3,
        result4: result.result4,
        lastQ: user.quiz2.lastQ + 1,
        finished: done ? true : false
    }
    await user.save()
        .then()
        .catch(e => {
            return res.json({ success: false });
        })

    if (done === true) {
        
        const { result1, result2, result3, result4 } = result;
        if (result1 > result2 && result1 > result3 && result1 > result4) {
            return res.json({ success: true, result: 'Secure' });
        }
        else if (result2 > result1 && result2 > result3 && result2 > result4) {
            return res.json({ success: true, result: 'Anxious' });
        }
        else if (result3 > result1 && result3 > result2 && result3 > result4) {
            return res.json({ success: true, result: 'Avoidant' });
        }
        else if (result4 > result1 && result4 > result3 && result4 > result2) {
            return res.json({ success: true, result: 'Disorganied' });
        }
    }
    else {
        return res.json({ success: true, result: result });
    }
});
module.exports = Quiz2;