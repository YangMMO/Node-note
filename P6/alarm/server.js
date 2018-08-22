const mail = require('./mail.js');

// 省略其他代码...

// 监听异常事件
process.on('uncaughtException', function (err){
 console.log(err);
 mail.send('[服务器异常]' + err.toString(), err.stack)
})