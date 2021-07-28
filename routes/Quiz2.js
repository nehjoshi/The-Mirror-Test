const express = require("express");
const Quiz2 = express.Router();

Quiz2.post("/quiz2", async (req, res) => {
    let { ans, result, type } = req.body;       //Type will represent the type of personality:
    if (ans === "submit") {                     //1: Secure; 2: Anxious; 3: Avoidant; 4: Disoranized
        console.log('submit')                   //Result will be an array containing the four results for each type
        return res.json({ result: result });
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