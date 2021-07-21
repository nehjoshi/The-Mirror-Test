const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');

corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
};
app.use(cors(corsOptions));
app.use(express.json());
dotenv.config();
port = process.env.PORT || 5000;

app.post('/auth', async (req, res) => {
    const {name} = req.body;
    console.log(name);
    const token = await jwt.sign(name, process.env.SECRET_KEY);
    return res.json({sucess: true, token: token});
})


app.listen(port, () => {
    console.log('Server is up and running!');
});