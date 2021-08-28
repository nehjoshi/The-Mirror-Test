const express = require("express");
const Quiz4 = express.Router();

Quiz4.post('/quiz4', async (req, res) => {
    let { type, value, result, done } = req.body;
    //Here type will represent extroversion, agreeableness, conscientiousness, neuroticism, or openess
    if (done === true) {
        console.log('Done!');
        switch (type) {
            case 'e':
                result.e += value;
                console.log(result);
                return res.json({ success: true, result: result });
            case 'a':
                result.a += value;
                return res.json({ success: true, result: result });
            case 'c':
                result.c += value;
                return res.json({ success: true, result: result });
            case 'n':
                result.n += value;
                return res.json({ success: true, result: result });
            case 'o':
                result.o += value;
                return res.json({ success: true, result: result });
        }
        
    }
    else {
        switch (type) {
            case 'e':
                result.e += value;
                console.log(result);
                return res.json({ success: true, result: result });
            case 'a':
                result.a += value;
                return res.json({ success: true, result: result });
            case 'c':
                result.c += value;
                return res.json({ success: true, result: result });
            case 'n':
                result.n += value;
                return res.json({ success: true, result: result });
            case 'o':
                result.o += value;
                return res.json({ success: true, result: result });
        }
    }
});
module.exports = Quiz4;