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
        finished: done ? true : false
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