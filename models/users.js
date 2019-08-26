const mongoose = require('mongoose');

var UserModel = function(){ 
	var UserSchema = mongoose.Schema({
	  username: {type: String,required:true,unique:true},
	  email: {type: String,required:true,unique:true},
	  password : {type: String,required:true},
	  user_type: {type:Number, default:0},
	  date: {type: Date,default: Date.now}
	});
	
	return mongoose.model('users', UserSchema);
};

module.exports = new UserModel();