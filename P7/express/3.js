var express = require( 'express');
var app = express();

app.get('/', (req, res, next) => {
  console.log('调用了中间件1')
  next()
})

app.use((req, res, next) => {
  console.log('调用了中间件2')
  next()
})

app.get('/', (req, res, next) => {
  console.log('路由1')
  res.send('home')
})

app.get('/page2', (req, res, next) => {
  console.log('路由2')
  res.send('page2')
})

app.listen(3000, () => {
  console.log(`express app listening on port 3000`)
})
