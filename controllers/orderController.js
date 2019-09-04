var async = require("async");
var Order = require('../models/orders.js');
var Cart = require('../models/cart.js');

var OrderController = {
	findCart: function(req, res,next){
        var filter = {user_id:req.body.user_id};
        Cart.aggregate([
			{$match:filter},
			{$group:
				{
					_id:{'productid':'$productid', 'user_id':'$user_id'},
					quantity: {$sum:1},
					productid:{$last:'$productid'}
				} 
			}
		]).exec(function(err, data){
            if(err || data.length==0){
                return res.status(500).send({errmsg:"something went wrong"})
            }else{
                req.params.order=data;
                return next();
            }
        });
    },
    saveOrder:function(req, res,next){
        async.forEachOf(req.params.order, (value, key, callback) => {            
            var obj = req.body;
            obj.productid = value.productid;
            obj.quantity = value.quantity;
            var order = new Order(obj);
            order.save(function(err, users){
                if(err){
                   return callback(err);
                }else{
                    callback();
                }
            });
        }, (err,result) => {
            if (err) {
                return res.status(500).send(err);
            }else{
                return next();
            }
        });
    },
    deleteCart:function(req, res){
        Cart.remove({user_id:req.body.user_id}, function(err, data){
            if(err){
                return res.status(500).send(err);
            }else{
                return res.send({msg:"order placed successfully"})
            }
        })
    }
};
module.exports = OrderController;