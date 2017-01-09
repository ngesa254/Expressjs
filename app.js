
/*Welcome to app.js file
I use this file for tutorials at my publication: https://medium.com/iot-5g-extreme-ideas-lab
*/
var express = require ('express');

var app = express();

app.get('/', function (req, res){

res.send('Yo Gang! Here is an awesome page! There are many more like this.');

});

app.listen (3000);
