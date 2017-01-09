
//Require express
var express = require ('express');

var app = express();

app.get('/', function (req, res){

res.send('Yo Gang! Here is an awesome page! There are many more like this.');

});

app.listen (3000);