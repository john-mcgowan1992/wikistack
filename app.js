var express = require('express');
var app = express();
var Port = 1993;
var bodyParser = require('body-parser');
var swig = require('swig');
var wikiRouter = require('./routes/wiki.js');
var path = require('path');


//swig configuration 
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
swig.setDefaults({cache: false});

app.use(express.static(__dirname+"/public"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));


app.use(function(req, res, next) {
	console.log(req.method + " " + req.path);
	next();
})


app.use('/wiki', wikiRouter)


app.use('/', function(req,res) {
	
	res.render('index');
})

app.listen(Port, function(){
	console.log("Listening on port: " + Port)
})