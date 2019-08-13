const mongoose = require('mongoose');

var UserModel = function(){ 
	var UserSchema = mongoose.Schema({
	  name: String,
	  username: {type: String,unique:true},
	  password : String,
	  email : {type: String,unique:true},
	  user_type: {type:Number, default:0},
	  date: {type: Date,default: Date.now}
	});
	
	return mongoose.model('users', UserSchema);
};

module.exports = new UserModel();