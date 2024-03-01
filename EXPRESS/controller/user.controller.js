const Users = require('../public/user.json');

exports.addUser = (req, res) => {
const user = req.body;    
Users.push(user);
res.status(201).json({message: 'user added successfully...'})
};

exports.getAllUsers = (req, res) => {
    res.status(200).json(Users);
};

exports.getUser = (req, res) => {
    const id = +req.query.id;
    let user = Users.find((item)=> item.id === id)
    res.status(200).json(user);
};

exports.replaceUser = (req, res) => {
    const id = +req.query.id;
    let userIndex = Users.findIndex((item)=> item.id === id)
    let user = Users[userIndex];
    Users.splice(userIndex, 1, {...req.body});
    res.status(200).json({message: 'user Replaced successfully...'});
};

exports.updateUser = (req, res) => {
    const id = +req.query.id;
    let userIndex = Users.findIndex((item)=> item.id === id)
    let user = Users[userIndex];
    Users.splice(userIndex, 1, {...user,...req.body});
    res.status(200).json({message: 'user Updated successfully...'});
};

exports.deleteUser = (req, res) => {
    const id = +req.query.id;
    let userIndex = Users.findIndex((item)=> item.id === id)
    let user = Users[userIndex];
    Users.splice(userIndex, 1);
    res.status(200).json({message: 'user Deleted successfully...'});
};