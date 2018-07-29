const cluster = require('cluster');
const http = require('http');

// const cpuNum = require('os').cpus().length();
const cpuNum = 4;

if (cluster.isMaster) {
  // linux环境下默认采用轮叫调度
  // cluster.schedulingPolicy = cluster.SCHED_RR;
  for (let i = 0; i < cpuNum; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code) => {
    console.info(`worker[${worker.process.pid}] exited, 退出码:${code}`);
  })
} else {
  let server = http.createServer();
  server.listen(80, '127.0.0.1');
  server.on('request', (req, res) => {
    console.info(`worker[${process.pid}] handle request`);
    res.end(`worker[${process.pid}] handle request`);
  });
}