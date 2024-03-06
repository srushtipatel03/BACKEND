const User = require('../model/user.model');
const bcrypt = require('bcrypt');

exports.addUser = async (req, res) => {
    try {
       const { firstName, lastName, gender, email, password, age } = req.body; 
    //    console.log(req.body);
    let hashpassword = await bcrypt.hash(password,10);
    // console.log(hashpassword);
       let newUser = await User.create({
           firstName,
           lastName,
           gender,
           email,
           password: hashpassword,
           age
    });
    newUser.save();
    res.status(201).json({user: newUser, Message: 'New User Added Successfully...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});   
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find({ isDelete: false });
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.getUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        // let user = await User.findById(userId);                 //Users find by ID
        let user = await User.findOne({_id: userId, isDelete: false});   //Users find by specific field
        if(!user){
            return res.status(404).json({message: 'User Not Found'});
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.updateUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        let user = await User.findById(userId);                
        if(!user){
            return res.status(404).json({message: 'User Not Found'});
        }
      user = await User.findByIdAndUpdate(user._id, {$set: {...req.body} }, { new: true });
    //   user = await User.findOneAndUpdate({_id:user._id}, {$set: {...req.query} }, { new: true });
    res.status(200).json({user, message: 'User Updated...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        let user = await User.findById(userId);                 //Users find by ID
        if(!user){
            return res.status(404).json({message: 'User Not Found'});
        }
    //   user = await User.findByIdAndDelete(user._id);
      user = await User.findOneAndUpdate({_id: user._id}, {isDelete: true}, {new: true});
      res.status(200).json({user, message: 'User Deleted...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};


