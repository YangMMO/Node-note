request.post('http://localhost:3000/login', {
 form: {
  username: 'xxx',
  password: '123456'
 }
}, function(error, res, body) {
 console.log(body)
})