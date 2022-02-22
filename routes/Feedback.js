const express = require("express");
const router = express.Router();
const schema = require("../models/FeedbackModel");
const mongoose = require("mongoose");

router.post('/feedback', async (req, res) => {
    const db = await mongoose.model("Feedback", schema);
    const newEntry = new db;
    const { email, feedback } = req.body;
    newEntry.email = email;
    newEntry.feedback = feedback;
    try {
        await newEntry.save();
        return res.json({ success: true });
    } catch (err) {
        console.log(err);
        return res.json({ success: false });
    }

});
module.exports = router;