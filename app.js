require("dotenv").config()
const path = require('path');
const express = require("express")
const app = express()
const apiRouter = require('./api');
const morgan = require('morgan');
const cors = require('cors');
const client = require("./db/client");

// client.connect();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    // console.log(req.body);
    next();
});

// app.get('/', express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.use((error, req, res, next) => {
    res.send({
        error: error.error,
        message: error.message,
        name: error.name
    });
});
    
module.exports = app;
