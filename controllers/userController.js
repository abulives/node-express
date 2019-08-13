const jwt = require('jsonwebtoken');
var User = require('../models/users.js');

var UserController = {
	signUp: function(req, res){
		var user = new User(req.body);
		user.save(function(err, users){
			if(err){
				return res.send(err);
			}else{
				return res.send(users);
			}
		});
	},
	login: function(req, res){
		console.log("data", req.body);
		var filter = {};
		filter.password = req.body.password;
		filter["$or"] = [{"username":req.body.username}, {"email":req.body.email}];
		User.find(filter, function(err, data){
			if(err || data.length==0){
				return res.send(404, {"error":"user doesn't exit"});
			}else{
				var token = {};
				//var token = jwt.sign(data, 'palarivattamsasi');
				return res.send(data[0]);
			}
		});
	},
	getUser: function(req,res){
		User.find({}, function(err, data){
			if(err){
				return res.send(404, err);
			}else{
				return res.send(data);
			}
		});
	},
	deleteUser: function(req,res){
		console.log("id", req.params.id, req.query.id);
		User.remove({_id:req.params.id}, function(err){
			if(err){
				return res.send(404, err);
			}else{
				return res.send({"data":"removed succesfully"});
			}
		});
	}
};
module.exports = UserController;