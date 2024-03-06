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
    }]
});

module.exports = mongoose.model('products', productSchema);