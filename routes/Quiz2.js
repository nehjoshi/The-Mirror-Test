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
            user.quiz2.resultDesc = "People with a secure attachment style have an ability to form trusting, loving and lasting relationships. They tend to have good self-esteem and it is easier for them to share feelings with partners and friends.";
        }
        else if (result2 > result1 && result2 > result3 && result2 > result4) {
            user.quiz2.result = "Anxious";
            user.quiz2.resultDesc = "People with an anxious attachment style tend to be insecure in and about their relationsips. Because they are concerned with the uncerctainty of relationships, they are normally hungry for validation from their partners. They also display needy or clingy behaviour.";
        }
        else if (result3 > result1 && result3 > result2 && result3 > result4) {
            user.quiz2.result = "Avoidant";
            user.quiz2.resultDesc = "An adult with this attachment style prefers to avoid intimacy and close relationships with others. This helps them retain a sense of independence and invulnerability.";
        }
        else if (result4 > result1 && result4 > result3 && result4 > result2) {
            user.quiz2.result = "Disorganized";
            user.quiz2.resultDesc = "An adult with this attachment style generally makes efforts to avoid their feelings so that they don't get overwhelmed by them. This style is a combination of both anxious and avoidant attachment styles.";
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