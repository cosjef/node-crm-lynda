// use routes to define endpoints

var express = require('express');

// create variable named app that runs an instance of express
var app = express();


// create a mini express app with just the routing stuff
var router = express.Router();

// The order you place your middleware and routes is very important.
// Everything will happen in the order that they appear.
// Middleware are functions that have access to the request and response objects in our Express application.

// get something when calling the root url
router.get('/', function (req, res) {
    res.send("This is the default / route");
});


// /contacts route
// callback function takes two arguments: request and response object
// get request handler function is passed a request and response object as variables
router.get('/contact', function (req, res) {
    res.send("GET request successful to /contact");
    res.end();
});


// POST new contact route
router.post('/contact', function(req, res) {
    res.send("POST request successful");
    res.end();
});


// retrieve single contact route
router.put('/contact/:contactId', function (req, res) {
    res.send("Put request successful to /contactId");
    res.end();
});

// delete contact route
router.delete('/contact', function (req, res) {
    res.send("Delete request successful");
    res.end();
});

// export to be able to use this elsewhere in the application
module.exports = router;