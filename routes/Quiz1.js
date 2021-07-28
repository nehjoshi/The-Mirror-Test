const express = require("express");
const Quiz1 = express.Router();

Quiz1.post("/quiz1", async (req, res) => {
    let { ans, result } = req.body;
    try {

        if (ans === "submit") {
            console.log('submit')
            return res.json({ result: result });
        }

        if (ans === 1) {
            result += 1;
            console.log(result);
            return res.json({ success: true, result: result });
        } else {
            return res.json({ success: true, result: result });
        }
    } catch (e) {
        console.log(e);
    }
});
module.exports = Quiz1;