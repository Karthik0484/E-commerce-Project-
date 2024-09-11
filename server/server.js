const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const cookiparse = require('cookie - Parser');
const cors = require('cors');

mongoose.connect('mongodb+srv://Aravind:Aravind@2041@cluster0.ykz5b.mongodb.net/')
    .then(() => console.log("Mongodb is Connected")).catch((error) => console.log(error));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        orign: 'http://localhost:5173/',
        methods:
    })
)