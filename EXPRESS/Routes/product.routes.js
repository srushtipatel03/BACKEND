const express = require('express');
const productRoutes = express.Router();
const {verifyToken} = require('../helpers/verifyToken');
const {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../controller/product.controller');

productRoutes.post('/add-product', addProduct);
productRoutes.get('/get-all-products',verifyToken, getAllProducts);
productRoutes.get('/get-product',verifyToken, getProduct);
productRoutes.put('/update-product',verifyToken, updateProduct);
productRoutes.delete('/delete-product',verifyToken, deleteProduct);

module.exports = productRoutes;
