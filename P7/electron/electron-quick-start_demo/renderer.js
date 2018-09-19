// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var fs = require('fs');
var request = require('request');
var rp = require('request-promise');
var cheerio = require('cheerio');

var btn = document.querySelector('#download');

// 按钮事件响应
btn.addEventListener('click', function() {

  // 获取输入框的网址
  var url = document.querySelector('#url').value;

  // 根据网址下载HTML
  rp.get(url).then(function(htmlString) {

    // 解析HTML提取所有图片链接
    var $ = cheerio.load(htmlString);
    $('img').each(function() {
      var pic = $(this).attr('src');
      console.log(pic)

      // 逐个下载图片保存到本地
      var name = Date.now() + pic.substring(pic.lastIndexOf('.'));
      var path= './Downloads/' + name;
      request(pic).pipe(fs.createWriteStream(path));
    })
  })
})