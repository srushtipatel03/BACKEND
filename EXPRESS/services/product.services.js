const Product = require('../model/product.model');

module.exports = class ProductServices {
    async addNewProduct(body){
       try {
        return await Product.create(body);
       } catch (error) {
        console.log(error);
        return error.message;
       }
    }

    async getProduct(body){
       try {
        return await Product.findOne(body);
       } catch (error) {
        console.log(error);
        return error.message;
       }
    }

    async getAllProduct(body){
       try {
        return await Product.find(body);
       } catch (error) {
        console.log(error);
        return error.message;
       }
    }
};