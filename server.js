var express = require('express');
var path = require('path');
var app = express();

app.listen(8080, function() {
  console.log('Server started at 8080');
});
//
// app.get('/', function(req, res) {
//   res.send('Hello World')
// });

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

app.use(express.static('public'));
