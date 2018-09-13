var fs = require('fs');
var request = require('request');

var url = 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508925590.jpg';

request(url).pipe(fs.createWriteStream('download/test.jpg'))