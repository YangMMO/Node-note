var rp = require('request-promise');
var cheerio = require('cheerio');

rp('http://maoyan.com/films')
  .then((htmlString) => {
    var $ = cheerio.load(htmlString);

    var name = $('.movie-list .movie-item-title').attr('title');
    var score = $('.movie-list .channel-detail-orange')[0].innerText;
    var img = $('.movie-list .movie-poster img')[1].src;

    console.log(`${name} ${score} ${img}`);
  })
  .catch((err) => {
    console.log(err)
  })