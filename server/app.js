var express = require ('express');
var app = express();
var port = 5000;
var path = require('path');
var index = require("./modules/index.js");
// var bodyParser = require('body-parser');

app.use( express.static( 'server/public' ) );
// app.use(bodyParser.urlencoded({extended:true}));
app.use('/', index);

app.listen(port, function(){
  console.log("app.js Listening on port: " + port);
});
