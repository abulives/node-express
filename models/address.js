const mongoose = require('mongoose');

// Define the address schema
const addressSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    name: { type: String },
    address: { type: String },
    pincode: { type: String },
    phone: { type: Number }
});

// Export the model directly
module.exports = mongoose.model('Address', addressSchema);
