const mongoose = require('mongoose');
const ProductsSchema = new mongoose.Schema({
    Title: { type: String },
    Price: { type: Number },
    Description: { type: String }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductsSchema);
