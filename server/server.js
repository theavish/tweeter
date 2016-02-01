var express = require('express');
var app = express();
var routes = require('./routes');
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');



app.use('/', express.static(__dirname + '/../client/'));
app.use('/', routes);

app.listen(port, function() {
  console.log('Server running on port ' + port);
});

module.exports = app;
