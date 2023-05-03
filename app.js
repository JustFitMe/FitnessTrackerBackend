require("dotenv").config()
const express = require("express")
const app = express()
const apiRouter = require('./api');
const morgan = require('morgan');
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.body);
    next();
});

app.use('/api', apiRouter);
    
module.exports = app;
