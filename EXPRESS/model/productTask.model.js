const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    categories: [{
        type: String
    }],
    isDelete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('products', productSchema);