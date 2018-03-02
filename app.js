var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var mongoose = require('mongoose');
var app      = express();
var http     = require("http");
var server   = http.createServer(app);
var mongoose = require('mongoose');




var hotel_model = require('./api/models/hotel_model'); // Creacion Modelo 
var routes = require('./api/routes/hotel_route'); // Importar el routes
//routes(app); // registrar el route de la api



// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express['static'](__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express['static'](__dirname + '/controller'));
app.use(express['static'](__dirname + '/models'));




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile('public/index.html');
});

app.use(router);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotels', function(error){
   if(error){
      throw error; 
   }
    app.listen(80, function() {
    console.log("Node server running on http://localhost:80");
    console.log("MongoDB Connected");
  });
});

routes(app); 





