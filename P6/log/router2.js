const url = require('url');
const log4js = require('log4js');
const logger = log4js.getLogger();

logger.level = 'info'; // trace | debug | info | warn | error | fatal

exports.router = function(req, res) {
  let urlObj = url.parse(req.url);
  let pathname = urlObj.pathname;

  logger.info(req.socket.remoteAddress + ' ' + req.method + ' ' + pathname);

  // ..
}