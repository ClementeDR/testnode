/**
 * Created by ClementeDR on 11/03/2017.
 */

var express     = require('express');
var app         = express();


var port = process.env.PORT || 8080;


app.get('/', function(req, res) {
    res.send('Hello! The API ');
});

app.listen(port);

console.log('CONNECTED http://localhost:' + port);
 
