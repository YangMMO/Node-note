const url = require('url');

exports.router = function(req, res) {
  let urlObj = url.parse(req.url);
  let pathname = urlObj.pathname;

  console.log(new Date() + ' ' + req.method + ' ' + pathname)

  // ..
}