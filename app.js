const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Register = require('./routes/Register.js');
const ResetPassword = require('./routes/ResetPassword.js');
const Login = require("./routes/Login.js");
const Quiz1 = require("./routes/Quiz1.js");
const Quiz2 = require("./routes/Quiz2.js");
const Quiz3 = require("./routes/Quiz3.js");
const Quiz4 = require("./routes/Quiz4.js");
const Quiz5 = require("./routes/Quiz5.js");
const Dashboard = require('./routes/Dashboard.js');
const RegisterDetails1 = require('./routes/RegDetails1');
const RegisterDetails2 = require('./routes/RegDetails2');
const FetchResults = require('./routes/FetchResults');
const helmet = require('helmet');
const path = require('path');


app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/', Quiz1);
app.use('/', Quiz2);
app.use('/', Quiz3);
app.use('/', Quiz4);
app.use('/', Quiz5);
app.use('/', Register);
app.use('/', Login);
app.use('/', ResetPassword);
app.use('/', Dashboard);
app.use('/', RegisterDetails1);
app.use('/', RegisterDetails2);
app.use('/', FetchResults);
dotenv.config();
port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    
})
.catch((e) => {
    
})
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
});
