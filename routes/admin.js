/**
 * Created by kristofer on 17.01.18.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin',{ title: 'admin page' })
});

module.exports = router;
