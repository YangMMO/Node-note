const net = require('net');
const cp = require('child_process');

let workers = [];
for (let i = 0; i < 4; ++i) {
  workers.push(cp.fork(`${__dirname}/6-worker.js`));
}

let server = net.createServer({ pauseOnConnect: true });

server.listen(80, '127.0.0.1');

server.on('connection', (socket) => {
  let worker = workers.shift();
  worker.send('socket', socket);
  workers.push(worker);
});
