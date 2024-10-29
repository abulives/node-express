const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: String },
    price: { type: Number },
    description: { type: String },
    image: { type: String },
    date: { type: Date, default: Date.now }
});

// Export the model directly
module.exports = mongoose.model('Product', productSchema);
