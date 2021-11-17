const express = require("express");
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) return res.json({ message: "No token!" });
    else {
        try {
            const verify = await jwt.verify(token, process.env.SECRET_KEY);
            next();
        } catch (e) {
            return res.status(403).json({ message: "Invalid Authorization!", error: e });
        }
    }
};
module.exports = verifyToken;