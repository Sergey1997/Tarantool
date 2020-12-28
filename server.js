const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

var TarantoolConnection = require('tarantool-driver');
var conn = new TarantoolConnection('localhost:3301');

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log('We are live on ' + port);
  require('./routes')(app, conn);
});