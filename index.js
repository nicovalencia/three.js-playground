var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get(/^\/.+\/?$/, function(req, res, next) {
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(3000);
console.log('Server started ---> listening on [localhost:3000]');
