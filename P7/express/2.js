var express = require( 'express');
var app = express();

app.get('/', (req, res) => {
  res.send('home')
})

app.get('/page1', (req, res) => {
  res.send('this page 1')
})

app.get('/page2', (req, res) => {
  res.send('this page 2')
})

app.listen(3000, () => {
  console.log(`express app listening on port 3000`)
})
