var express = require('express');
var app = express();
var Port = 1993;
var bodyParser = require('body-parser');
var swig = require('swig');
var mongoose = require('mongoose');

app.use(express.static(__dirname+"/public"));

//swig configuration 
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({cache: false});

app.use(bodyParser.json());

app.get('/', function(req,res,next) {
	res.render('index');;

})








app.use(function(req, res) {
	console.log(req.method + " " + res.statusCode);
})


app.listen(Port, function(){
	console.log("Listening on port: " + Port);
})