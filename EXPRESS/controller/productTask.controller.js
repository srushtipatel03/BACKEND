const Product = require('../model/productTask.model');

exports.addProduct = async (req, res) => {
    try {
        const { title, description, price, categories} = req.body;
        let newProduct = await Product.create({
            title,
            description,
            price,
            categories
        });
        newProduct.save();
        res.status(201).json({product: newProduct, Message: 'New Product Added Successfully...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        let products = await Product.find({ isDelete: false });
        // console.log(products);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.getProduct = async (req, res) => {
    try {
        let productId = req.query.productId;
        let Product = await Product.findOne({_id: productId, isDelete: true});
        if(!Product){
            return res.status(404).json({message: 'Product Not Found'});
        };
        res.status(200).json(Product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.updateProduct = async (req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById({productId});
        if(!product){
            return res.status(404).json({message: 'Product Not Found'});
        }
        product = await Product.findByIdAndUpdate(product._id, {$set: {...req.body} }, { new: true});
        res.status(200).json({message: 'Product Updated Successfully...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message: 'Product Not Found'});
        }
        user = await User.findOneAndUpdate({_id: product._id}, {isDelete: true}, {new: true});
        res.status(200).json({message: 'Product Deleted Successfully...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};