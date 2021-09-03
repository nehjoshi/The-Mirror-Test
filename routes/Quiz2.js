const express = require("express");
const Quiz2 = express.Router();

Quiz2.post("/quiz2", async (req, res) => {
    let { ans, result, type, done } = req.body;       //Type will represent the type of personality:

    switch (type) {         //1: Secure; 2: Anxious; 3: Avoidant; 4: Disorganized
        case 1:     
            result.result1 += ans;
            break;
        case 2:
            result.result2 += ans;
            break;
        case 3:
            result.result3 += ans;
            break;
        case 4:
            result.result4 += ans;
            break;
    }
    if (done === true) {                     
        console.log('submit');
        const { result1, result2, result3, result4 } = result;
        if (result1 > result2 && result1 > result3 && result1 > result4) {
            return res.json({ success: true, result: 'Secure' });
        }
        else if (result2 > result1 && result2 > result3 && result2 > result4) {
            return res.json({ success: true, result: 'Anxious' });
        }
        else if (result3 > result1 && result3 > result2 && result3 > result4) {
            return res.json({ success: true, result: 'Avoidant' });
        }
        else if (result4 > result1 && result4 > result3 && result4 > result2) {
            return res.json({ success: true, result: 'Disorganied' });
        }
    }
    else {
        return res.json({ success: true, result: result });
    }

});
module.exports = Quiz2;