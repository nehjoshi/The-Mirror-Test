const express = require("express");
const Quiz4 = express.Router();
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');

Quiz4.post('/quiz4', async (req, res) => {
    let { type, value, done, email } = req.body;
    //Here type will represent extroversion, agreeableness, conscientiousness, neuroticism, or openess
    const User = await mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({ email: email })

    switch (type) {
        case 'e':
            user.quiz4.E += value;
            break;
        case 'a':
            user.quiz4.A += value;
            break;
        case 'c':
            user.quiz4.C += value;
            break;
        case 'n':
            user.quiz4.N += value;
            break;
        case 'o':
            user.quiz4.O += value;
            break;
    }
    user.quiz4 = {
        E: user.quiz4.E,
        A: user.quiz4.A,
        C: user.quiz4.C,
        N: user.quiz4.N,
        O: user.quiz4.O,
        lastQ: user.quiz4.lastQ + 1,
        finished: done ? true : false
    }

    await user.save()
        .then()
        .catch(e => {
            return res.json({ success: false });
        })

    if (done) {
        const { E, A, C, N, O } = user.quiz4;
        const E_score = E + 20;
        const A_score = A + 14;
        const C_score = C + 14;
        const N_score = N + 38;
        const O_score = O + 8;
        let E_desc, A_desc, C_desc, N_desc, O_desc;
        if (E_score >= 28) E_desc = "This means you have a high level of extroversion.";
        else if (E_score > 13 && E_score < 28) E_desc = "This means you have a medium level of extroversion.";
        else E_desc = "This means you have a low level of extroversion.";

        if (A_score >= 28) A_desc = "This means you have a high level of agreeableness.";
        else if (A_score > 13 && A_score < 28) A_desc = "This means you have a medium level of agreeableness.";
        else A_desc = "This means you have a low level of agreeableness.";

        if (C_score >= 28) C_desc = "This means you have a high level of conscientiousness.";
        else if (C_score > 13 && C_score < 28) C_desc = "This means you have a medium level of conscientiousness.";
        else C_desc = "This means you have a low level of conscientiousness.";

        if (N_score >= 28) N_desc = "This means you have a high level of neuroticism.";
        else if (N_score > 13 && N_score < 28) N_desc = "This means you have a medium level of neuroticism.";
        else N_desc = "This means you have a low level of neuroticism.";

        if (O_score >= 28) O_desc = "This means you have a high level of openness.";
        else if (O_score > 13 && O_score < 28) O_desc = "This means you have a medium level of openness.";
        else O_desc = "This means you have a low level of openness.";

        user.quiz4 = {
            E: user.quiz4.E,
            A: user.quiz4.A,
            C: user.quiz4.C,
            N: user.quiz4.N,
            O: user.quiz4.O,
            E_score: E_score,
            A_score: A_score,
            C_score: C_score,
            N_score: N_score,
            O_score: O_score,
            E_desc: E_desc,
            A_desc: A_desc,
            C_desc: C_desc,
            N_desc: N_desc,
            O_desc: O_desc,
            lastQ: 50,
            finished: true
        }
        await user.save()
        .then(res => {
        })
        .catch(e => {
            return res.json({ success: false });
        })
    }

    return res.json({ success: true });

});
module.exports = Quiz4;