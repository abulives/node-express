var express = require('express');
var router = express.Router();
var OrderController = require('../controllers/orderController.js');

/* GET users listing. */

router.post('/placeorder', OrderController.findCart,OrderController.saveOrder,OrderController.deleteCart);
router.get('/myorder', OrderController.myOrder);
router.get('/order', OrderController.allOrder);
router.put('/order', OrderController.updateOrder);

module.exports = router;
