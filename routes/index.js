var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About this page', pageText: 'Here is some info about this project' });
});

router.get('/', function(req, res, next) {
  res.render('index',{title: 'Welcome to the home page'});
});

module.exports = router;
