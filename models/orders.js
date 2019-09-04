const mongoose = require('mongoose');

var orderModel = function(){ 
	var orderSchema = mongoose.Schema({
        user_id:{type:String,type: mongoose.Schema.Types.ObjectId, ref: 'users',required:true},
        productid: {type:String, type: mongoose.Schema.Types.ObjectId, ref: 'products' ,required:true},
        quantity: {type: Number,default:0,required:true},
        payment_method:{type:String,required:true},
        card_numer:{type:String,required:true},
        status:{type:String,default:'pending'},
	});
	
	return mongoose.model('orders', orderSchema);
};

module.exports = new orderModel();