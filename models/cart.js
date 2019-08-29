const mongoose = require('mongoose');

var cartModel = function(){ 
	var cartSchema = mongoose.Schema({
	  productid: {type:String},
	  user_id:{type:String},
	  name: {type: String,required:true},
	  price : {type: Number},
      description: {type:String},      
	  image: {type:String}
	});
	
	return mongoose.model('carts', cartSchema);
};

module.exports = new cartModel();