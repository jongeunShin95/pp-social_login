var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin', function(req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
