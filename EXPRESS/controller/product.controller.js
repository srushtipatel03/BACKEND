const Products = require('../public/products.json');

exports.addProduct = (req,res)=>{
    // console.log(req.body);
    const product = req.body;
    Products.push(product);
    //products.push({...req.body});
    res.status(201).json({message: 'Product is Added...'})
};

exports.getAllProducts = (req,res)=>{
    res.status(200).json(Products);
};

exports.getProduct = (req,res)=>{    //Query Params     
    const id = +req.query.id;                                              
    // console.log(id);                                                      
    let product = Products.find((item)=> item.id === id)                  
    res.status(200).json(product);                                       
};

exports.replaceProduct = (req,res)=>{    
    const id = +req.query.id;                                                   
    let productIndex = Products.findIndex((item)=> item.id === id)  
    let product = Products[productIndex];      
    Products.splice(productIndex, 1, {...req.body});  
    //console.log(product);       
    res.status(200).json({message: 'Product Replace SuccessFully...'});                                       
};

exports.updateProduct = (req,res)=>{    
    const id = +req.query.id;                                                   
    let productIndex = Products.findIndex((item)=> item.id === id)  
    let product = Products[productIndex];      
    Products.splice(productIndex, 1, {...product,...req.body});  
    //console.log(product);       
    res.status(200).json({message: 'Product update SuccessFully...'});                                       
};

exports.deleteProduct = (req,res)=>{    
    const id = +req.query.id;                                                   
    let productIndex = Products.findIndex((item)=> item.id === id)  
    let product = Products[productIndex];      
    Products.splice(productIndex, 1);  
    //console.log(product);   
    res.status(200).json({message: 'Product delete SuccessFully...'});                                       
};


