const express = require('express');
const userRoutes = express.Router();
const { addUser,
    deleteUser,
    getAllUsers,
    getUser,
    replaceUser,
    updateUser
} = require('../controller/user.controller');

//Create User
userRoutes.post('/', addUser);

//Get All Users
userRoutes.get('/', getAllUsers);

//Get Single User
userRoutes.get('/single-user', getUser);

//Replace Single User
userRoutes.put('/replace-user', replaceUser);

//Update Single User
userRoutes.patch('/update-user', updateUser);

//Delete Single User
userRoutes.delete('/delete-user', deleteUser);

module.exports = userRoutes;


