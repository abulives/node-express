var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/productController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/product', ProductController.addProduct);
router.get('/product', ProductController.getProduct);
router.post('/cart', ProductController.addCart);
router.post('/mycart', ProductController.getMyCart);
router.delete('/mycart/:id', ProductController.removeMyCart);
router.get('/mycartcount', ProductController.getMyCartCount);
router.post('/address', ProductController.addAddress);
router.get('/address', ProductController.getAddress);
module.exports = router;
