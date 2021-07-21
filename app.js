const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
};
app.use(cors(corsOptions));
app.use(express.json());
dotenv.config();
port = process.env.PORT || 5000;




app.listen(port, () => {
    console.log('Server is up and running!');
});