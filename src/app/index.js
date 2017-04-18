const http = require('http')
const path = require('path')
const _ = require('lodash')
var express = require('express')
var app = express();

const port = 3000;
var html_dir = '/../html/';

app.use("/styles", express.static(path.join(__dirname, '../css')));
app.use("/scripts", express.static(path.join(__dirname, '../js')));
app.use("/media", express.static(path.join(__dirname, '../public/media')));
app.use("/fonts", express.static(path.join(__dirname, '../public/fonts')));
app.use("/vendor", express.static(path.join(__dirname, '../public/vendor')));
app.use("/modules", express.static(path.join(__dirname, '../node_modules')));

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + html_dir + 'home.html'));
});

app.listen(port, (err) => {
    if(err)
        return console.log('what happened?! ', err);
    
    console.log('server is listening on ' + port);
    
});