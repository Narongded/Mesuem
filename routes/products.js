var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("product");
    res.send('Display all product');
  });

  router.get('/add', function(req, res, next) {
    res.send('add all product');
  });  

  router.get('/edit', function(req, res, next) {
    res.send('edit all product');
  });

  router.get('/delete', function(req, res, next) {
    res.send('delete all product');
  });



module.exports = router;
