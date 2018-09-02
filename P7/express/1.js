var express = require( 'express');
var app = express();

app.get('/', (req, res) => {
  res.send('home')
})

app.listen(3000, () => {
  console.log(`express app listening on port 3000`)
})
