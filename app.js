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

const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) return res.json({message: 'No token!'});
    else {
        try {
        const verify  = await jwt.verify(token, process.env.SECRET_KEY);
        res.json({message: 'success!', auth: true});
        next()
        } catch(e){
            return res.json({message: 'Some error!', error: e});
        }
        
    }
}

app.post('/auth', async (req, res) => {
    const {name} = req.body;
    const token = await jwt.sign({name: name, result: 0}, process.env.SECRET_KEY, {
        expiresIn: 10800,
    });
    return res.json({sucess: true, token: token});
});
app.get('/verify', verifyToken, (req, res) => {
    
});
app.post('/quiz', async (req, res) => {
    const {ans} = req.body;
    const token = req.headers["x-access-token"];
    try {
        const user = await jwt.verify(token, process.env.SECRET_KEY);
        let result = user.result;
        if (ans===1){
            result += 1;
            console.log(result);
            return res.json({success: true});
        }
        else {
            return res.json({success: true});
        }
    } catch(e){
        console.log(e);
    }


});

app.listen(port, () => {
    console.log('Server is up and running!');
});