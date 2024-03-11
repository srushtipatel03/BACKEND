const Product = require('../model/productTask.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.registerProduct = async (req, res) => {
    try {
        const { title, description, price, categories} = req.body;
        let product = await Product.findOne({title: title, isDelete: false});
        console.log(product);
        if(product) {
            return res.status(400).json({message: 'Product is already registered...'});
        }
        product = await Product.create({
            title, description,
            price, categories
        })
        product.save();
        res.status(201).json({product: product, message: 'New Product Added Successfully...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.loginProduct = async (req, res) => {
    try {
        let product = await Product.findOne({title: req.body.title, isDelete: false});
        // console.log(product);
        if(!product) {
          return res.status(404).json({message: 'Product is not found...'});
        }
        let token = jwt.sign({productId: product._id}, 'srushti');
        res.status(200).json({token, message: 'Login Successful...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        let products = await Product.find({ isDelete: false });
        console.log(products);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.getProduct = async (req, res) => {
    try {
        let productId = req.product._id;

        let product = await Product.findOne({_id: productId, isDelete: false});
        console.log({msg:product});
        if(!product){
            return res.status(404).json({message: 'Product Not Found'});
        };
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.updateProduct = async (req, res) => {
    try {
        let productId = req.product._id;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message: 'Product Not Found'});
        }
        product = await Product.findOneAndUpdate({_id:product._id}, {$set : { ...req.body}}, { new : true});
        res.status(200).json({message: 'Product Updated Successfully...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        let productId = req.product._id;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message: 'Product Not Found'});
        }
        product = await Product.findOneAndUpdate({_id: product._id}, {isDelete: true}, {new: true});
        res.status(200).json({product, message: 'Product Deleted Successfully...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};