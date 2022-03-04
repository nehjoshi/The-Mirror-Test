//PERMA Score
const express = require("express");
const Quiz5 = express.Router();
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');

Quiz5.post('/quiz5', async (req, res) => {
    let { type, value, done, email } = req.body;
    const User = await mongoose.model('The Mirror Test', schema);
    const user = await User.findOne({ email: email });


    switch (type) {
        case 'P':
            user.quiz5.P += value;      //Positive emotion
            break;
        case 'E':                   //Engagement
            user.quiz5.E += value;
            break;
        case 'R':                   //Relationships
            user.quiz5.R += value;
            break;
        case 'M':                   //Meaning
            user.quiz5.M += value;
            break;
        case 'A':                      //Accomplishment
            user.quiz5.A += value;
            break;
        case 'N':                   //Negative Emotions
            user.quiz5.N += value;
            break;
        case 'HAP':                 //Happiness
            user.quiz5.HAP += value;
            break;
        case 'H':                  //Health
            user.quiz5.H += value;
            break;
        case 'LON':                   //Loneliness
            user.quiz5.LON += value;
            break;
    }
    user.quiz5 = {
        P: user.quiz5.P,
        E: user.quiz5.E,
        R: user.quiz5.R,
        M: user.quiz5.M,
        A: user.quiz5.A,
        N: user.quiz5.N,
        HAP: user.quiz5.HAP,
        H: user.quiz5.H,
        LON: user.quiz5.LON,
        PERMA: user.quiz5.PERMA,
        finished: false,
        lastQ: user.quiz5.lastQ + 1,
    }
    await user.save()
        .then()
        .catch(e => {
            return res.json({ success: false });
        })
    if (done === true) {
        console.log("This is the true block!");
        let finalResult = (user.quiz5.P + user.quiz5.E + user.quiz5.R + user.quiz5.M + user.quiz5.A + user.quiz5.HAP) / 16;
        console.log(finalResult);
        console.log("1 works");
        let final = finalResult.toFixed(2);
        console.log("2 works");
        user.quiz5 = {
            P: user.quiz5.P,
            E: user.quiz5.E,
            R: user.quiz5.R,
            M: user.quiz5.M,
            A: user.quiz5.A,
            N: user.quiz5.N,
            HAP: user.quiz5.HAP,
            H: user.quiz5.H,
            LON: user.quiz5.LON,
            lastQ: 23,
            finished: true,
            PERMA: final,
        }
        console.log("3 works");
        await user.save()
        .then(res => {
        })
        .catch(e => {
            return res.json({ success: false });
        })
    }

    return res.json({ success: true });



});
module.exports = Quiz5;