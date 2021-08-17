const express = require("express");
const Quiz2 = express.Router();

Quiz2.post("/quiz2", async (req, res) => {
    let { ans, result, type, done } = req.body;       //Type will represent the type of personality:
    if (done === true) {                     //1: Secure; 2: Anxious; 3: Avoidant; 4: Disoranized
        console.log('submit');
        result.result4 += ans;
        const {result1, result2, result3, result4} = result;
        if (result1 > result2 && result1>result3 && result1>result4){
            return res.json({ success: true, result: 1 });
        }
        else if (result2 > result1 && result2>result3 && result2>result4){
            return res.json({ success: true, result: 2 });
        }
        else if (result3 > result1 && result3>result2 && result3>result4){
            return res.json({ success: true, result: 3 });
        }
        else if (result4 > result1 && result4>result3 && result4>result3){
            return res.json({ success: true, result: 4 });
        }
    }
    else {          
        switch(type){
            case 1:
                result.result1 += ans;
                console.log(result);
                return res.json({ success: true, result: result });
            case 2:
                result.result2 += ans;
                console.log(result);
                return res.json({ success: true, result: result });
            case 3:
                result.result3 += ans;
                console.log(result);
                return res.json({ success: true, result: result });
            case 4:
                result.result4 += ans;
                console.log(result);
                return res.json({ success: true, result: result });
        }
    }

});
module.exports = Quiz2;