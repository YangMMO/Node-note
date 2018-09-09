var express = require( 'express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.get('/add/:a/:b', (req, res) => {
//   var sum = parseInt(req.params.a) + parseInt(req.params.b)
//   res.send('' + sum)
// })

// app.get('/add', (req, res) => {
//   var sum = parseInt(req.query.a) + parseInt(req.query.b)
//   res.send('' + sum)
// })

// app.post('/add', (req, res) => {
//   var sum = parseInt(req.body.a) + parseInt(req.body.b)
//   res.send('' + sum)
// })

app.get('/add', (req, res) => {
  var sum = parseInt(req.param('a')) + parseInt(req.param('b'))
  res.send('' + sum)
})

app.listen(3000, () => {
  console.log('app')
})