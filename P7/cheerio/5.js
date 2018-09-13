var rp = require('request-promise');

rp('https://movie.douban.com/cinema/nowplaying/beijing/')
  .then((htmlString) => {
    console.log(htmlString)
  })
  .catch((err) => {
    console.log(err)
  })