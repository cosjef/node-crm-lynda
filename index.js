// Bring in our dependencies
var express = require('express');
var morgan = require('morgan');
const routes = require('./src/routes/crmRoutes');

// create variable named app that runs an instance of express
const app = express();
// create a variable for the port
const PORT = 3000;

app.use(morgan('combined'));

//  connect all routes to our application
//  apply the routes to our application
app.use('/', routes);


app.listen(PORT);
    console.log("Node server is running on port " + PORT);


