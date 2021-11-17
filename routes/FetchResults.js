const mongoose = require('mongoose');
const schema = require("../models/UserModel");
const router = require("express").Router();
const verifyToken = require("./middleware/VerifyToken");

router.get('/fetch-result', verifyToken, async (req, res) => {
    const { email } = req.query;
    console.log(email);
    const User = mongoose.model("The Mirror Test", schema);
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const dataToSend = {
            result: {
                quiz1: {
                    result: user.quiz1.result,
                    resultDesc: user.quiz1.resultDesc
                },
                quiz2: {
                    result: user.quiz2.result,
                    resultDesc: user.quiz2.resultDesc
                },
                quiz3: {
                    optScore: user.quiz3.optScore,
                    optDesc: user.quiz3.optDesc,
                    hopeScore: user.quiz3.hopeScore,
                    hopeDesc: user.quiz3.hopeDesc,
                    esteemScore: user.quiz3.esteemScore,
                    esteemDesc: user.quiz3.esteemDesc,
                },
                quiz4: {
                    E: user.quiz4.E,
                    A: user.quiz4.A,
                    C: user.quiz4.C,
                    N: user.quiz4.N,
                    O: user.quiz4.O,
                },
                quiz5: {
                    result: user.quiz5.PERMA
                }
            },
            userDetails: {
                name: user.name,
                weight: user.reg1.weight,
                height: user.reg1.height,
                nationality: user.reg1.nationality,
                religion: user.reg1.religion,
                smoke: user.reg1.smoke,
                drink: user.reg1.drink,
                glasses: user.reg1.glasses,
                hobbies: user.reg1.hobbies,
                physicalConditions: user.reg1.physicalConditions,
                childhoodIllnesses: user.reg1.childhoodIllnesses,
                dob: user.reg1.dob
            },
            reg2: user.reg2,
        
    }
    return res.json({ auth: true, completeData: dataToSend });
});
module.exports = router;