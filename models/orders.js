const mongoose = require('mongoose');

// Define the item schema
const itemSchema = new mongoose.Schema({
    productid: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
    quantity: { type: Number, default: 0, required: true },
    status: { type: String, default: 'pending' }
});

// Define the order schema
const orderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    payment_method: { type: String, required: true },
    card_number: { type: String, required: true }, // Fixed typo from 'card_numer' to 'card_number'
    items: [itemSchema],
    created_on: { type: Date, default: Date.now }
});

// Export the model directly
module.exports = mongoose.model('Order', orderSchema);
