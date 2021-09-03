//PERMA Score
const express = require("express");
const Quiz5 = express.Router();

Quiz5.post('/quiz5', (req, res) => {
    let { type, value, result, done } = req.body;

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
    if (done === true) {

        let PERMA = (result.P + result.E + result.R + result.M + result.A + result.HAP) / 16;
        let final = Math.round(PERMA * 100) / 100
        return res.json({ success: true, PERMA: final })
    }
    else {
        return res.json({ success: true, result: result });

    }

});
module.exports = Quiz5;