const express = require("express");
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');
const Quiz1 = express.Router();

Quiz1.post("/quiz1", async (req, res) => {
    const User = await mongoose.model("The Mirror Test", schema);
    let { ans, result, done, email } = req.body;
    const user = await User.findOne({ email: email })


    if (done === true) {
        console.log('submit');
        result += ans;
        return res.json({ success: true, result: result });
    }
    else {
        if (ans === 1) {
            result += 1;
            console.log(result);
            user.quiz1.push(1);
            await user.save()
            .then(resp => {
                return res.json({ success: true, result: result });
            })
            .catch(e => {
                return res.json({ success: false});
            })
            
        } else {
            user.quiz1.push(0);
            await user.save()
            .then(resp => {
                return res.json({ success: true, result: result });
            })
            .catch(e => {
                return res.json({ success: false});
            })
        }
    }

});
module.exports = Quiz1;