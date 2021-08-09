const express = require("express");
const Quiz3 = express.Router();

Quiz3.post('/quiz3', async (req, res) => {
    //Let's accept type of the request, and value of the response (either 0 or 1)
    let { type, value, result, done } = req.body;
    
    if (done === true) {
        console.log('Done!');
    }
    else {
        console.log('hello')
        switch (type) {
            case 'pmb':
                result.pmb += value;
                return res.json({ success: true, result: result });
            case 'pvb':
                result.pvb += value;
                return res.json({ success: true, result: result });
            case 'pmb':
                result.psb += value;
                return res.json({ success: true, result: result });
            case 'pmg':
                result.pmg += value;
                return res.json({ success: true, result: result });
            case 'pvg':
                result.pvg += value;
                return res.json({ success: true, result: result });
            case 'psg':
                result.psg += value;
                return res.json({ success: true, result: result });
        }
    }
});
module.exports = Quiz3;