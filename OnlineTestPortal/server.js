// import express
const express = require('express');

// put express in app variable 
const app = express();

// import path - The Path module provides a way of working with directories and file paths.
const path = require('path');

 
// import body parser - body parser converts data into json and vice verse 
// Parsing is a special form of conversion that deals with getting a value from an object of type string and changing that value to another type.
// Basically its a middleware for parsing JSON, plain text, or just returning a raw Buffer object for you to deal with as you require.
const bodyParser = require('body-parser');

// importing the api.js from routes folder 
const api = require('./servers/routes/api');

// It parses the incoming request body and converts it to JSON format.
app.use(bodyParser.json());

//  basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.urlencoded({extended:false}));

// The app. use() method mounts or puts the specified middleware functions at the specified path. 
// This middleware function will be executed only when the base of the requested path matches the defined path.
// /api is the starting path for api's
// In this case, it is used to mount the api middleware function at the /api path. 
// This means that any request that starts with /api will use the api middleware function. 
app.use('/api', function(req, res, next){
   next();
});


// for static files which includes all the compiled files
// app.use(express.static(path.join(__dirname, 'dist/online-test-app')));
app.use(express.static(__dirname + '/dist/online-test-portal', { type: 'module' }));

// getting the index.html file
// The line app.get('*', function(req,res){ res.sendFile(path.join(__dirname,'dist/online-test-app/index.html')); }); is used to serve the index.html file of your Angular application.
//The * is a wildcard character that matches any URL path. 
// This means that this route will be used for any GET request that doesn’t match any other route.
app.get('*', function(req,res){
   res.sendFile(path.join(__dirname,'dist/online-test-portal/index.html'));
});

// mentioning the port to be 5000 but it was showing already in use so using 3000
const port = process.env.PORT || 3000;

// this line starts to listen in the port 5000 
app.listen(port, console.log(`Server started on port ${port}`));


// module.exports = function(req,res,next){
//    app.use('/api', api);
// }