var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

// view engine setup
app.set('views', __dirname + '/');
app.set('view engine', 'jade');  
 
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
}); 

app.listen( port, function(){ console.log('listening on port '+port); } ); 