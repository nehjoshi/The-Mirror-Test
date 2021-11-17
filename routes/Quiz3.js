const express = require("express");
const Quiz3 = express.Router();
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');

Quiz3.post('/quiz3', async (req, res) => {
    //Let's accept type of the request, and value of the response (either 0 or 1)
    let { type, value, result, done, email } = req.body;
    const User = await mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({ email: email })

    switch (type) {
        case 'pmb':
            result.pmb += value;
            break;
        case 'pvb':
            result.pvb += value;
            break;
        case 'psb':
            result.psb += value;
            break;
        case 'pmg':
            result.pmg += value;
            break;
        case 'pvg':
            result.pvg += value;
            break;
        case 'psg':
            result.psg += value;
            break;
    }
    user.quiz3 = {
        pmb: result.pmb,
        pvb: result.pvb,
        psb: result.psb,
        pmg: result.pmg,
        pvg: result.pvg,
        psg: result.psg,
        lastQ: user.quiz3.lastQ + 1,
        finished: done ? true : false
    }

    await user.save()
        .then()
        .catch(e => {
            return res.json({ success: false });
        })

    if (done === true) {
        let B = result.pvb + result.psb + result.pmb;
        let G = result.pvg + result.psg + result.pmg;
        let optScore = G - B;
        let optDesc = '';
        let hopeScore = result.pvb + result.pmb;
        let hopeDesc = '';
        let esteemScore = result.psb;
        let esteemDesc = '';

        if (optScore > 8) {
            optDesc = 'You are very optimistic across the board.';
        }
        else if (optScore >= 6 && optScore <= 8) {
            optDesc = 'You are moderately optimistic.';
        }
        else if (optScore > 3 && optScore <= 5) {
            optDesc = 'Your level of optimism is average.';
        }
        else if (optScore == 1 || optScore == 2) {
            optDesc = 'You are moderately pessimistic.';
        }
        else {
            optDesc = 'Your score indicates extreme pessimism';
        }

        if (hopeScore >= 0 && hopeScore <= 2) {
            hopeDesc = 'You are extraordinarily hopeful.';
        }
        else if (hopeScore >= 3 && hopeScore <= 6) {
            hopeDesc = 'You are moderately hopeful.';
        }
        else if (hopeScore >= 7 && hopeScore <= 8) {
            hopeDesc = 'You have an average hope score.';
        }
        else if (hopeScore >= 9 && hopeScore <= 11) {
            hopeDesc = 'Your score indicates moderate hopelessness';
        }
        else if (hopeScore >= 12 && hopeScore <= 16) {
            hopeDesc = 'Your score indicates severse hopelessness.';
        }

        if (esteemScore >= 0 && esteemScore <= 1) {
            esteemDesc = 'You have a very high self-esteem.';
        }
        else if (esteemScore >= 2 && esteemScore <= 3) {
            esteemDesc = 'Your level of self-esteem is moderate.';
        }
        else if (esteemScore == 4) {
            esteemDesc = 'Your level of self-esteem is average.';
        }
        else if (esteemScore >= 5 && esteemScore <= 6) {
            esteemDesc = 'Your have a moderately low self-esteem.';
        }
        else if (esteemScore >= 7) {
            esteemDesc = 'Your have a very low self-esteem.';
        }
        user.quiz3 = {
            pmb: result.pmb,
            pvb: result.pvb,
            psb: result.psb,
            pmg: result.pmg,
            pvg: result.pvg,
            psg: result.psg,
            optScore, optDesc, hopeScore, hopeDesc, esteemScore, esteemDesc,
            lastQ: user.quiz3.lastQ,
            finished: done ? true : false
        }
        await user.save()
        .then()
        .catch(e => {
            return res.json({ success: false });
        })
        return res.json({ success: true, optScore, optDesc, hopeScore, hopeDesc, esteemScore, esteemDesc });
    }

    return res.json({ success: true, result: result });

});
module.exports = Quiz3;