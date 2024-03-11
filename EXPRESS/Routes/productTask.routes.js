const express = require('express');
const productRoutes = express.Router();
const {verifyToken} = require('../helpers/pVerifyToken');
const {
    registerProduct,
    loginProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../controller/productTask.controller');

productRoutes.post('/register-product', registerProduct);
productRoutes.post('/login-product', loginProduct);
productRoutes.get('/get-all-products',verifyToken, getAllProducts);
productRoutes.get('/get-product',verifyToken, getProduct);
productRoutes.put('/update-product',verifyToken, updateProduct);
productRoutes.delete('/delete-product',verifyToken, deleteProduct);

module.exports = productRoutes;
