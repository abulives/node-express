var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/productController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/product', ProductController.addProduct);
router.get('/product', ProductController.getProduct);
module.exports = router;
