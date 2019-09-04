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
                data.forEach(function(item){
                    delete item._id;
                });
                req.body.items=data;
                return next();
            }
        });
    },
    saveOrder:function(req, res,next){
        var order = new Order(req.body);
        order.save(function(err){
            if(err){
                return res.status(500).send(err)
            }else{
                return next()
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
    },
    myOrder:function(req, res){
        var filter ={};
        var obj = req.body;
	    Object.keys(obj).forEach(function(key) {
	        filter[key] = obj[key];
        });
        Order.find(filter).populate('items.productid').sort({created_on:-1}).exec(function (err, orders) {
            if(err){
                return res.status(500).send(err)
            }else{
                return res.send(orders);
            }
        });
    },
    allOrder:function(req, res){
        Order.find({}).populate('items.productid').sort({created_on:-1}).exec(function (err, orders) {
            if(err){
                return res.status(500).send(err)
            }else{
                return res.send(orders);
            }
        });
    },
    updateOrder:function(req, res){
        Order.update({'items._id':req.body.id}, {$set:{'items.status':req.body.status}})
        .exec(function(err, data){
            if(err){
                return res.status(500).send(err)
            }else{
                return res.send(data);
            }
        })
    }
};
module.exports = OrderController;