//PERMA Score
const express = require("express");
const Quiz5 = express.Router();

Quiz5.post('/quiz5', (req, res) => {
    const {type, value, result, done} = req.body;

    switch(type){
        case 'P':
            result.P += value;      //Positive emotion
            return res.json({ success: true, result: result });
        case 'E':                   //Engagement
            result.E += value;
            return res.json({ success: true, result: result });
        case 'R':                   //Relationships
            result.R += value;
            return res.json({ success: true, result: result });
        case 'M':                   //Meaning
            result.M += value;
            return res.json({ success: true, result: result });
        case 'A':                      //Accomplishment
            result.A += value;
            console.log(result);
            return res.json({ success: true, result: result });
        case 'N':                   //Negative Emotions
            result.N += value;
            
            return res.json({ success: true, result: result });
        case 'hap':                 //Happiness
            result.hap += value;
            return res.json({ success: true, result: result });
         case 'H':                  //Health
            result.H += value;
            return res.json({ success: true, result: result });   
        case 'L':                   //Loneliness
            result.L += value;  
            return res.json({ success: true, result: result });

    }
});
module.exports = Quiz5;