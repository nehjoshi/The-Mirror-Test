const express = require("express");
const Quiz2 = express.Router();

Quiz2.post("/quiz2", async (req, res) => {
    let { ans, result, type, done } = req.body;       //Type will represent the type of personality:
    if (done === true) {                     //1: Secure; 2: Anxious; 3: Avoidant; 4: Disoranized
        console.log('submit');
        result.result4 += ans;
        const finalResult = Math.max(result.result1, result.result2, result.result3, result.result4);
        return res.json({ success: true, result: finalResult });
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