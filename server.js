var express = require("express");

//create app
var app = express();

//serve static files
app.use(express.static(__dirname + "/public"));

//listen
var port = 8888;
app.listen(port, function () {
  console.log("Listening on port " + port);
});