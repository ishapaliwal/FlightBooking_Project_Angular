var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/Routing');
var myErrorLogger = require('./public/javascripts/ErrorLogger');
var myRequestLogger = require('./public/javascripts/RequestLogger');

var cors = require('cors');
var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(myRequestLogger);

app.use('/', router);

app.use(myErrorLogger);

app.listen(1020);
console.log("Server listening in port 1020");