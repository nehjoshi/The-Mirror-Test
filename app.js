const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");
const Quiz1 = require("./routes/Quiz1.js");
const Quiz2 = require("./routes/Quiz2.js");
const Quiz3 = require("./routes/Quiz3.js");
const Quiz4 = require("./routes/Quiz4.js");

app.use(express.json());
app.use('/', Quiz1);
app.use('/', Quiz2);
app.use('/', Quiz3);
app.use('/', Quiz4);
dotenv.config();
port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Hello!");
})

app.post("/auth", async (req, res) => {
  const { name } = req.body;
  const token = await jwt.sign(
    { name: name, result: 0 },
    process.env.SECRET_KEY,
    {
      expiresIn: 10800,
    }
  );
  return res.json({ sucess: true, token: token });
});

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return res.json({ message: "No token!" });
  else {
    try {
      const verify = await jwt.verify(token, process.env.SECRET_KEY);
      res.json({ message: "success!", auth: true });
      next();
    } catch (e) {
      return res.json({ message: "Some error!", error: e });
    }
  }
};

app.get("/verify", verifyToken, (req, res) => {});

app.listen(port, () => {
  console.log("Server is up and running!");
});
