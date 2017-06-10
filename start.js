'use strict';

//import dependencies
var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('hello from express-get')
});
app.set('port', 3000);
app.listen(app.get('port'));
