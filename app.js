require("dotenv").config()
const express = require("express")
const app = express()
const apiRouter = require('./api');
const morgan = require('morgan');
const cors = require('cors')

app.use(cors())

// No CORS Headder set
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/message.json');
  });
  
  // CORS header `Access-Control-Allow-Origin` set to accept all
  app.get('/allow-cors', function(request, response) {
    response.set('Access-Control-Allow-Origin', '*');
    response.sendFile(__dirname + '/message.json');
  });
  
  // listen for requests :)
  const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
  });

app.use(morgan('dev'));
app.use(express.json());


app.use((req, res, next) => {
    console.log(req.body);
    next();
});

app.use('/api', apiRouter);

module.exports = app;
