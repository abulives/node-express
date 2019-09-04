const mongoose = require('mongoose');

var addressModel = function(){ 
	var addressSchema = mongoose.Schema({
	  user_id: {type:String,required:true},
	  name:{type:String},
	  address: {type: String},   
	  pincode: {type:String},
	  phone: {type:Number}
	});
	
	return mongoose.model('address', addressSchema);
};

module.exports = new addressModel();