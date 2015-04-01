//for instructions on setting up an HTTP server: 
//https://github.com/sf-wdi-17/notes/tree/master/lectures/week-03/_1_monday/dusk#url-parameters

//
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send("<h1>This is a calculator</h1><p>to continue, type a URL in the address bar in this format: http://localhost:3000/math/multiply/40/5");
});


app.get('/math/add/:x/:y', function(req,res) { 


	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var result = x + y;
	res.send("Result is " + result);
//text

});	

app.get('/math/subtract/:x/:y', function(req,res) { 


	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var result = x - y;
	res.send("Result is " + result);


});	

app.get('/math/multiply/:x/:y', function(req,res) { 


	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var result = x * y;
	res.send("Result is " + result);


});	

app.get('/math/divide/:x/:y', function(req,res) { 


	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var result = x / y;
	res.send("Result is " + result);


});	

app.listen(3000);