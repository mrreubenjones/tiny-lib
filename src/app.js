// import express
var express = require('express');


// intitialize express by creating an object... I think
var app = express();

// Set up our port for listening, for later
var port = 5000;


// Anything with app.use is going to be used by express before everything else.
// The following example assumes we have the line app.use(express.static('public')); above the routes in our code, as we do here.
// If for example there was a route defined far below for "/ok.css", but there was also an ok.css in our public folder,
// then the route would never be hit, because the ok.css from our public folder would be found first.
// This seems to be best practice for serving .js and .css files (possibly images too) rather than having 500 lines of routes for individual resource files, hard coded.

app.use(express.static('public'));
// Now, when the server is running, you should be able to run localhost:5000/css/app.css and see the css from /public/css/app.css


app.use(express.static('src/views'));
// I think this one is going to be temporary until we start using a templating engine


// Add some routes BOYEEE

// localhost:5000
app.get('/',function(req,res){
	res.send('Hello world!');
});
// this route isn't accessible anymore, because it finds index.html first (in /src/views) and serves that

// localhost:5000/add
app.get('/add',function(req,res){
	res.send('Add ya books here bro');
});

// localhost:5000/books
app.get('/books',function(req,res){
	res.send('Here ya books fam');
});

// This is where the express server starts (or node server? not 100% sure)
// Without this, we got nothing goin on
app.listen(port,function(err){
	console.log('running server on port ' + port); // this is printed to the CLI
});