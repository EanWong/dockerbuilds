var express = require('express');
var router = express.Router();

/* GET Worksheet Pre template listing. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/UItest2.html');
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send(req.body);
});


module.exports = router;
