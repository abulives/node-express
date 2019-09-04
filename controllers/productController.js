var Product = require('../models/products.js');
var Cart = require('../models/cart.js');
var Address = require('../models/address.js');
var UserController = {
	addProduct: function(req, res){
		var product = new Product(req.body);
		product.save(function(err, data){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send(data._id);
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
	},
	addCart: function(req, res){
		if(req.body._id){
			req.body.productid=req.body._id;
			delete req.body._id;
		}
		var cart = new Cart(req.body);
		cart.save(function(err, data){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send(data._id);
			}
		});
	},
	getMyCart: function(req,res){
        var filter ={};
        var obj = req.body;
	    Object.keys(obj).forEach(function(key) {
	        filter[key] = obj[key];
		});
		Cart.aggregate([
			{$match:filter},
			{$group:
				{
					_id:{'productid':'$productid', 'user_id':'$user_id'},
					quantity: {$sum:1},
					price: { $sum: '$price' },
					name: {$last:'$name'},
					description: {$last:'$description'},
					image: {$last:'$image'},
					productid:{$last:'$productid'},
					id:{$last:'$_id'}
				} 
			}
		]).exec(function(err, data){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send(data);
			}
		});
	},
	getMyCartCount: function(req,res){
		var filter ={};
        var obj = req.query;
	    Object.keys(obj).forEach(function(key) {
	        filter[key] = obj[key];
		});
		Cart.aggregate([
			{$match:filter},
			{$group:
				{
					_id:{'user_id':'$user_id'},
					quantity: {$sum:1}
				} 
			}
		]).exec(function(err, data){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send(data);
			}
		});
	},
	removeMyCart:function(req,res){
		Cart.remove({_id:req.params.id}, function(err, data){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send(data);
			}
		});
	},
	addAddress: function(req, res){
		Address.findOneAndUpdate({user_id:req.body.user_id}, {$set:req.body}, {upsert:true},function(err, data){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send(data);
			}
		});
	},
	getAddress: function(req,res){
        var filter ={};
        var obj = req.body;
	    Object.keys(obj).forEach(function(key) {
	        filter[key] = new RegExp('.*' + obj[key] + '.*', 'i');
	    });
		Address.find(filter, function(err, data){
			if(err){
				return res.status(500).send(err);
			}else{
				return res.send(data);
			}
		});
	},
};

module.exports = UserController;