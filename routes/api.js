var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sayHello', function(req, res, next) {
  res.send('api here - with the hello message');
});

/* GET users listing. */
router.get('/hiSkanda', function(req, res, next) {
  res.send('Yes Please');
});

/* GET users listing. */
router.get('/homes', function(req, res, next) {
  res.send('what shall I do for you');
});
module.exports = router;
