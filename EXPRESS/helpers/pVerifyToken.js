const jwt = require('jsonwebtoken');
const User = require('../model/productTask.model');

exports.verifyToken = async (req, res, next) => {
    const authorization = req.headers['authorization'];
    if(authorization === undefined){
        return res.json({message: 'authorization not defined'});
    }
    let token = authorization.split(' ')[1];
    // console.log(token);
    if(token === undefined)
      return res.status(401).json({message: 'Unauthorized'});
    else{
        let {productId} = jwt.verify(token, 'srushti');
        let product = await User.findById(productId);
        if(product){
          req.product = product;
          next();
        }else
        return res.status(401).json({message: 'Invalid product'});
    }
}; 