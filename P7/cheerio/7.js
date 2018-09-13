var rp = require('request-promise');
var cheerio = require('cheerio');

rp('https://movie.douban.com/cinema/nowplaying/beijing/')
  .then((htmlString) => {
    // 使用cheerio解析
    var $ = cheerio.load(htmlString);
    var name = $('.lists li').attr('data-title');
    var score = $('.lists li').attr('data-score');
    var img = $('.lists li img').attr('src');
    console.log(`${name} ${score} ${img}`);
  })
  .catch((err) => {
    console.log(err);
  });