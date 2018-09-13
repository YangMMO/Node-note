var request = require('request');

var url = 'https://movie.douban.com/cinema/nowplaying/beijing/';
request(url, (err, res, body) => {
  // error
  console.log('error:', err);
  // statusCode
  console.log('statusCode', res && res.statusCode);
  // HTMLbody
  console.log('body', body);
})