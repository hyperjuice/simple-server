//for instructions on setting up an HTTP server: 
//https://github.com/sf-wdi-17/notes/tree/master/lectures/week-03/_1_monday/dusk#url-parameters

var express = require('express');
var app = express();



app.get('/math/add/:x/:y', function(req,res) { 


	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var result = x + y;
	res.send("Result is " + result);


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