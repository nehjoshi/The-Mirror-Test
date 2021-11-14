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
    if (done1===true && done2===true && done3===true && done4===true && done5===true) {
        finished = true;
    }
    const dataToSend = {
        quiz1: {
            lastQ: user.quiz1.lastQ,
            percentage: Math.round((user.quiz1.lastQ / 10) * 100),
            result: user.quiz1.result
        },
        quiz2: {
            lastQ: user.quiz2.lastQ,
            percentage: Math.round((user.quiz2.lastQ / 40) * 100),
            result1: user.quiz2.result1,
            result2: user.quiz2.result2,
            result3: user.quiz2.result2,
            result4: user.quiz2.result4
        },
        quiz3: {
            lastQ: user.quiz3.lastQ,
            percentage: Math.round((user.quiz3.lastQ / 48) * 100),
            pmb: user.quiz3.pmb,
            pvb: user.quiz3.pvb,
            psb: user.quiz3.psb,
            pmg: user.quiz3.pmg,
            pvg: user.quiz3.pvg,
            psg: user.quiz3.psg,
        },
        quiz4: {
            lastQ: user.quiz4.lastQ,
            percentage: Math.round((user.quiz4.lastQ / 50) * 100),
            E: user.quiz4.E,
            A: user.quiz4.A,
            C: user.quiz4.C,
            N: user.quiz4.N,
            O: user.quiz4.O,
        },
        quiz5: {
            lastQ: user.quiz5.lastQ,
            percentage: Math.round((user.quiz5.lastQ / 23) * 100),
            P: user.quiz5.P,
            E: user.quiz5.E,
            R: user.quiz5.R,
            M: user.quiz5.M,
            A: user.quiz5.A,
            N: user.quiz5.N,
            HAP: user.quiz5.HAP,
            H: user.quiz5.H,
            LON: user.quiz5.LON,
        },
        finished: finished
    }
    return res.json(dataToSend);
});
module.exports = router;