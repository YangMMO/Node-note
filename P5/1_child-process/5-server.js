const http = require('http');
const cp = require('child_process');

let workers = [];
for(let i = 0; i < 4; ++i) {
  workers.push(cp.fork(`${__dirname}/5-worker.js`));
}

let server = http.createServer();

server.listen(80, '127.0.0.1', () => {
  workers.forEach((Worker) => {
    Worker.send('server', server);
  });
  server.close();
});

server.on('request', (req, res) => {
  console.info('master handle request');
  res.end('master handle request');
});