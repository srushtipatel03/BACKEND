const express = require('express');
const productRoutes = express.Router();
const {addProducts,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../controller/productTask.controller');

productRoutes.post('/add-product', addProducts);
productRoutes.get('/get-all-products', getAllProducts);
productRoutes.get('/get-product', getProduct);
productRoutes.put('/update-product', updateProduct);
productRoutes.delete('/delete-product', deleteProduct);

module.exports = productRoutes;
