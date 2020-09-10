var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});
router.get('/registro', function(req, res, next) {
  res.render('registro.ejs', { title: 'registro' });
});
router.get('/ingreso', function(req, res, next) {
  res.render('ingreso.ejs', { title: 'ingreso' });
});
module.exports = router;
