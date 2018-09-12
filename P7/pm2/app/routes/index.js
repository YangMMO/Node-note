var express = require('express');
var router = express.Router();

var count = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  if(count >= 2) {
    process.exit();
  }
  ++ count;
  res.render('index', { title: 'Express' });
});

module.exports = router;
