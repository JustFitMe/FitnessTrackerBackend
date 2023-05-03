require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000;
const apiRouter = require('./api');
const morgan = require('morgan');
const { client } = require('./db');

app.use(morgan('dev'));
app.use(express.json());

client.connect();

app.use((req, res, next) => {
    console.log(req.body);
    next();
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});

// Setup your Middleware and API Router here

module.exports = app;
