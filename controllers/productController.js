var Product = require('../models/products.js');

var UserController = {
	addProduct: function(req, res){
		var user = new Product(req.body);
		user.save(function(err, users){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send(users);
			}
		});
	},
	getProduct: function(req,res){
        var filter ={};
        var obj = req.body;
	    Object.keys(obj).forEach(function(key) {
	        filter[key] = new RegExp('.*' + obj[key] + '.*', 'i');
	    });
		Product.find(filter, function(err, data){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send(data);
			}
		});
	},
	deleteProduct: function(req,res){
		Product.remove({_id:req.params.id}, function(err){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send({"data":"removed succesfully"});
			}
		});
	}
};
module.exports = UserController;