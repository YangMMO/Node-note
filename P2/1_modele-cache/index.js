const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  //清理模块缓存
  Object.keys(require.cache).forEach(key => {
    delete require.cache[key]
  })

  res.writeHead(200, {'Content-Type': 'text/plain'});

  const moduleA = require('./moduleA');
  res.end('ModuleA says:' + moduleA.text);
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})