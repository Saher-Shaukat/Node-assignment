var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose');
model= require('./api/models/model');
bodyParser= require('body-parser');
cors= require('cors');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/newdb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/route'); // importing route
routes(app); // register the route


app.listen(port);

console.log('API server started on: ' + port);