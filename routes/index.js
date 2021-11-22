var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/feedback', function(req, res, next) {
  res.render('feedback');
});

module.exports = router;
