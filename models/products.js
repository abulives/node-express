const mongoose = require('mongoose');

var ProductModel = function(){ 
	var productSchema = mongoose.Schema({
	  name: {type: String,required:true},
	  quantity: {type: String},
	  price : {type: String},
      description: {type:String},      
	  image: {type:String},
	  date: {type: Date,default: Date.now}
	});
	
	return mongoose.model('products', productSchema);
};

module.exports = new ProductModel();