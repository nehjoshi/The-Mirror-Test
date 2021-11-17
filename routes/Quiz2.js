const express = require("express");
const Quiz2 = express.Router();
const mongoose = require('mongoose');
const schema = require('../models/UserModel.js');

Quiz2.post("/quiz2", async (req, res) => {
    let { ans, result, type, done, email, qno } = req.body;       //Type will represent the type of personality:
    const User = await mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({ email: email })

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

    user.quiz2 = {
        result1: result.result1,
        result2: result.result2,
        result3: result.result3,
        result4: result.result4,
        result: "",
        resultDesc: "",
        lastQ: qno,
        finished: done ? true : false
    }
    await user.save()
        .then()
        .catch(e => {
            return res.json({ success: false });
        })

    if (done === true) {
        console.log("Finished!")
        const { result1, result2, result3, result4 } = result;
        if (result1 > result2 && result1 > result3 && result1 > result4) {
            console.log("Secure!");
            user.quiz2.result = "Secure";
            user.quiz2.resultDesc = "A secure attachment style refers to the ability to form secure, loving relationships with others. A securely attached person can trust others and be trusted, love and accept love, and get close to others with relative ease.";
        }
        else if (result2 > result1 && result2 > result3 && result2 > result4) {
            user.quiz2.result = "Anxious";
            user.quiz2.resultDesc = "An anxious attachment style is a form of insecure attachment style marked by a deep fear of abandonment. Anxiously attached people tend to be very insecure about their relationships, often worrying that their partner will leave them and thus always hungry for validation.";
        }
        else if (result3 > result1 && result3 > result2 && result3 > result4) {
            user.quiz2.result = "Avoidant";
            user.quiz2.resultDesc = "An avoidant attachment style is a form of insecure attachment style marked by a fear of intimacy. People with avoidant attachment style tend to have trouble getting close to others or trusting others in relationships, and relationships can make them feel suffocated.";
        }
        else if (result4 > result1 && result4 > result3 && result4 > result2) {
            user.quiz2.result = "Disorganized";
            user.quiz2.resultDesc = "A disorganized attachment style is a combination of both the anxious and avoidant attachment styles. People with fearful-avoidant attachment both desperately crave affection and want to avoid it at all costs.";
        }
        await user.save()
            .then()
            .catch(e => {
                return res.json({ success: false });
            });
        return res.json({ success: true });
    }
    else {
        return res.json({ success: true, result: result });
    }
});
module.exports = Quiz2;