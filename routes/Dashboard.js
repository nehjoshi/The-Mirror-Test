const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const schema = require("../models/UserModel.js");

router.get("/fetch/:email", async (req, res) => {
    const email = req.params.email;
    const User = await mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({email: email});
    
    const done1 = user.quiz1.finished;
    const done2 = user.quiz2.finished;
    const done3 = user.quiz3.finished;
    const done4 = user.quiz4.finished;
    const done5 = user.quiz5.finished;
    let finished = false;
    if (done1===done2===done3===done4===done5===true){
        finished = true;
    }
    const dataToSend = {
        quiz1: {
            lastQ: user.quiz1.lastQ,
            percentage: Math.round((user.quiz1.lastQ / 10) * 100),
        },
        quiz2: {
            lastQ: user.quiz2.lastQ,
            percentage: Math.round((user.quiz2.lastQ / 40) * 100)
        },
        quiz3: {
            lastQ: user.quiz3.lastQ,
            percentage: Math.round((user.quiz3.lastQ / 48) * 100)
        },
        quiz4: {
            lastQ: user.quiz4.lastQ,
            percentage: Math.round((user.quiz4.lastQ / 50) * 100)
        },
        quiz5: {
            lastQ: user.quiz5.lastQ,
            percentage: Math.round((user.quiz5.lastQ / 23) * 100)
        },
        finished: finished
    }
    return res.json(dataToSend);
});
module.exports = router;