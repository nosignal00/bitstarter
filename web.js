var express = require('express');
var fs = require('fs');

var content = fs.readFileSync("./index.html");

var string_content = content.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(string_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
