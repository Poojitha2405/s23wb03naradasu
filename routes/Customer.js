var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Customer', { title: 'Search Result' });
});

module.exports = router;