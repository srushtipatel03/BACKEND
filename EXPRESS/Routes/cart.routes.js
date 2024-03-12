const express = require('express');
const cartRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const {
    addToCart,
    getAllCart
} = require('../controller/cart.controller');

cartRoutes.post('/add-to-cart', verifyToken, addToCart);
cartRoutes.get('/get-all-cart', verifyToken, getAllCart);

module.exports = cartRoutes;