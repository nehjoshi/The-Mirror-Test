//PERMA Score
const express = require("express");
const Quiz5 = express.Router();
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');

Quiz5.post('/quiz5', async (req, res) => {
    let { type, value, result, done, email } = req.body;
    const User = await mongoose.model('The Mirror Test', schema);
    const user = await User.findOne({ email: email });


    switch (type) {
        case 'P':
            result.P += value;      //Positive emotion
            break;
        case 'E':                   //Engagement
            result.E += value;
            break;
        case 'R':                   //Relationships
            result.R += value;
            break;
        case 'M':                   //Meaning
            result.M += value;
            break;
        case 'A':                      //Accomplishment
            result.A += value;
            break;
        case 'N':                   //Negative Emotions
            result.N += value;
            break;
        case 'HAP':                 //Happiness
            result.HAP += value;
            break;
        case 'H':                  //Health
            result.H += value;
            break;
        case 'LON':                   //Loneliness
            result.LON += value;
            break;
    }
    user.quiz5 = {
        P: result.P,
        E: result.E,
        R: result.R,
        M: result.M,
        A: result.A,
        N: result.N,
        HAP: result.HAP,
        H: result.H,
        LON: result.LON,
        lastQ: user.quiz5.lastQ + 1,
        finished: done ? true : false
    }

    await user.save()
        .then()
        .catch(e => {
            return res.json({ success: false });
        })
    if (done === true) {

        let PERMA = (result.P + result.E + result.R + result.M + result.A + result.HAP) / 16;
        let final = Math.round(PERMA * 100) / 100;
        user.quiz5 = {
            P: result.P,
            E: result.E,
            R: result.R,
            M: result.M,
            A: result.A,
            N: result.N,
            HAP: result.HAP,
            H: result.H,
            LON: result.LON,
            lastQ: user.quiz5.lastQ,
            finished: done ? true : false,
            PERMA: final
        }
        await user.save()
            .then()
            .catch(e => {
                return res.json({ success: false });
            })
        return res.json({ success: true, PERMA: final })
    }

    return res.json({ success: true, result: result });



});
module.exports = Quiz5;