//PERMA Score
const express = require("express");
const Quiz5 = express.Router();

Quiz5.post('/quiz5', (req, res) => {
    let { type, value, result, done } = req.body;

    switch (type) {
        case 'P':
            result.P += value;      //Positive emotion
        case 'E':                   //Engagement
            result.E += value;
        case 'R':                   //Relationships
            result.R += value;
        case 'M':                   //Meaning
            result.M += value;
        case 'A':                      //Accomplishment
            result.A += value;
            console.log(result);
        case 'N':                   //Negative Emotions
            result.N += value;
        case 'HAP':                 //Happiness
            result.HAP += value;
        case 'H':                  //Health
            result.H += value;
        case 'LON':                   //Loneliness
            result.LON += value;
    }
    if (done === true) {
        result.P = result.P / 3;
        result.E = result.E / 3;
        result.R = result.R / 3;
        result.M = result.M / 3;
        result.A = result.A / 3;
        result.N = result.N / 3;
        result.H = result.H / 3;
        let PERMA = (result.P + result.E + result.R + result.M + result.A + result.HAP) / 16;
        return res.json({ success: true, PERMA: PERMA })
    }
    else {
        return res.json({ success: true, result: result });

    }

});
module.exports = Quiz5;