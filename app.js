var express = require('express');

var app = express();

var port = 5000;


// Add some routes BOYEEE
app.get('/',function(req,res){
	res.send('Hello world!');
});

app.get('/add',function(req,res){
	res.send('Add ya books here bro');
});

app.get('/books',function(req,res){
	res.send('Here ya books fam');
});

app.listen(5000,function(err){
	console.log('running server on port ' + port);
});