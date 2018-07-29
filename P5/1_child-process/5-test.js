const cp = require('child_process');

let map = {};
let finish = 0,
    total = 30;
for (let i = 0; i < total; ++i) {
  cp.exec('curl http://127.0.0.1', (err, stdout, stderr) => {
    if (err) throw err;
    if (!stdout) return;

    if (!map[stdout]) {
      map[stdout] = 1;
    } else {
      map[stdout] += 1;
    }

    finish += 1;
    if (finish === total) {
      console.info(JSON.stringify(map, null, '  '));
    }
  });
  
}