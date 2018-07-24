process.on('exit', code => {
  console.log(`子进程运行总时长: ${process.uptime()}`);
});

function fibonacci(n) {
  return n < 2 ? 1 : fibonacci(n-1) + fibonacci(n-2);
}

let start = process.hrtime();
console.info('fibo44:' + fibonacci(44));
console.info('fibo44耗时', process.hrtime(start))