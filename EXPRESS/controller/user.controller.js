const users = require('../public/user.json');

exports.addUser = (req, res) => {
const user = req.body;    
users.push(user);
res.status(201).json({message: 'User Data Added Successfully...'})
};

exports.getAllUsers = (req, res) => {
    res.status(200).json(users);
};

exports.getUser = (req, res) => {
    const id = +req.query.id;
    let user = users.find((item)=> item.id === id)
    res.status(200).json(user);
};

exports.replaceUser = (req, res) => {
    const id = +req.query.id;
    let userIndex = users.findIndex((item)=> item.id === id)
    console.log(userIndex);
    let user = users[userIndex];
    users.splice(userIndex, 1, {...req.body});
    res.status(200).json({message: 'User Data Replaced Successfully...'});
};

exports.updateUser = (req, res) => {
    const id = +req.query.id;
    let userIndex = users.findIndex((item)=> item.id === id)
    let user = users[userIndex];
    users.splice(userIndex, 1, {...user, ...req.body});
    res.status(200).json({message: 'User Data Updated Successfully...'});
};

exports.deleteUser = (req, res) => {
    const id = +req.query.id;
    let userIndex = users.findIndex((item)=> item.id === id)
    console.log(userIndex);
    let user = users[userIndex];
    users.splice(userIndex, 1);
    res.status(200).json({message: 'User Data Deleted Successfully...'});
};