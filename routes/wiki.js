var express = require('express');
var router = express.Router();
var swig = require('swig');
var models = require('../models/');
var Page = models.Page; 
var User = models.User; 

router.get('/',function(req,res){
	res.redirect('/');
})

router.post('/', function(req, res){
	var title = req.body.title;
	var content = req.body.content;
	var authorName = req.body.authorName;

  	var page = new Page({
    title: title,
    content: content //,
    // status: req.body.status,
    // author: req.body.authorName,
    // authorEmail: req.body.authorEmail,


  });

  
  page.save(function(err, page) {
  	// res.json(page);
  	res.redirect(page.route);
  });
   
});

router.get('/add', function(req, res){
	var pageInfo = req.body;
	// console.log(req);
	res.render('addpage');
})

router.get('/:url',function(req,res, next){
	var newUrl = req.params.url;
	Page.findOne({urlTitle: newUrl})
	.exec().then(function(page){
		res.render('wikipage', {title: page.title, content: page.content});
	})
	// res.send(newUrl);
})


module.exports = router;