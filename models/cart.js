const mongoose = require('mongoose');

// Define the cart schema
const cartSchema = new mongoose.Schema({
    productid: { type: String },
    user_id: { type: String },
    name: { type: String, required: true },
    price: { type: Number },
    description: { type: String },
    image: { type: String }
});

// Export the model directly
module.exports = mongoose.model('Cart', cartSchema);
