const http = require('http');
const url = require('url');
const cp = require('child_process');

let worker = cp.fork(`${__dirname}/4-worker.js`);

const server = http.createServer((req, res) => {
  let obj = url.parse(req.url);
  let n  = parseInt(obj.query);
  if (!n) {
    res.end('hello world');
  } else {
    console.info(`process ${worker.pid} calc ${n}`);
    worker.on('message', function cb(data) {
      console.info(data);
      if (data.n = n) {
        res.end(`fibonacci(${n}): ${data.result.toString()}`);
        worker.removeListener('message', cb);
      }
    });
    worker.send(n);
  }
});

server.listen(8080, '127.0.0.1');
