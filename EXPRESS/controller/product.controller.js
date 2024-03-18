const ProductServices = require('../services/product.services');
const productService = new ProductServices();

exports.addProduct = async (req, res) => {
    let product = await productService.getProduct({title: req.body.title, isDelete: false});
    if(product) {
        return res.json({message: 'Product is already registered...'});
    }
    product = await productService.addNewProduct({...req.body});
    res.status(200).json({product, message: 'prodyct is added...'});
};

exports.getAllProducts = async (req, res) => {
        let products = await productService.getAllProduct({ isDelete: false });
        res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
    const id = req.query.id;
    let product = await productService.getProduct({_id: id, isDelete: false});
    res.status(200).json(product);
};

exports.updateProduct = async (req, res) => {
    try {
        let productId = req.query.productId;
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
        let productId = req.query.productId;
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