const express = require("express");
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');
const Quiz1 = express.Router();

Quiz1.post("/quiz1", async (req, res) => {
    const { email } = req.body;
    const User = await mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({ email: email })
    let { ans, result, done } = req.body;

    if (done === true) {
        console.log('submit');
        result += ans;
        return res.json({ success: true, result: result });
    }
    else {
        if (ans === 1) {
            result += 1;
            console.log(result);
            return res.json({ success: true, result: result });
        } else {
            return res.json({ success: true, result: result });
        }
    }

});
module.exports = Quiz1;