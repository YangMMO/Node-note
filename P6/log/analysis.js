var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

// 使用流式读取日志文件，否则可能几个G的文件都会直接读到内存里
var instream = fs.createReadStream('/data/server.log');
var rl = readline.createInterface(instream, new stream);
var pathCountMap = {};

// 逐行分析日志，对各个路径的请求进行计数
rl.on('line', function(line) {
  if(/yyyy-mm-dd/.test(line) && /GET/.test(line)) {
    var path = line.split(' ')[5]
    pathCountMap[path] = (pathCountMap[path] || 0) +1
  }
});

// 文件结束，输出最终统计结果
rl.on('close', function() {
  console.log(pathCountMap)
})