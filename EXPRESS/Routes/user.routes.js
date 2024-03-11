const express = require('express');
const userRoutes = express.Router();
const { verifyToken} = require('../helpers/verifyToken');
const {
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller');

userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user', loginUser);
userRoutes.get('/get-all-users',verifyToken, getAllUsers);
userRoutes.get('/get-user',verifyToken, getUser);
userRoutes.put('/update-user',verifyToken, updateUser);
userRoutes.delete('/delete-user',verifyToken, deleteUser);
userRoutes.put('/change-password',verifyToken, changePassword);

module.exports = userRoutes;
