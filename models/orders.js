const mongoose = require('mongoose');

var orderModel = function(){ 
        var itemSchema = mongoose.Schema({
                productid: {type:String, type: mongoose.Schema.Types.ObjectId, ref: 'products' ,required:true},
                quantity: {type: Number,default:0,required:true},
                status:{type:String,default:'pending'}
        });
	var orderSchema = mongoose.Schema({
                user_id:{type:String,type: mongoose.Schema.Types.ObjectId, ref: 'users',required:true},
                payment_method:{type:String,required:true},
                card_numer:{type:String,required:true},
                items:[itemSchema],
                created_on: {type: Date,default: Date.now}
	});
	
	return mongoose.model('orders', orderSchema);
};

module.exports = new orderModel();