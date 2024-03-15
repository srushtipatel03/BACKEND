const express = require('express');
const cartRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const {
    addToCart,
    getAllCart,
    getCart,
    updateCart,
    deleteCart
} = require('../controller/cart.controller');

cartRoutes.post('/add-to-cart', verifyToken, addToCart);
cartRoutes.get('/get-all-cart', verifyToken, getAllCart);
cartRoutes.get('/get-cart', verifyToken, getCart);
cartRoutes.put('/update-cart', verifyToken, updateCart);
cartRoutes.delete('/delete-cart', verifyToken, deleteCart);

module.exports = cartRoutes;