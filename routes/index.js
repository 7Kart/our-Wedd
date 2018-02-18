var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("req.session.admin", req.session);
  res.render('index', {
    title: 'our wedding',
    admin: (req.session.admin != undefined) ? req.session.admin : false
  });
});

module.exports = router;
