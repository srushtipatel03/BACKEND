const express = require('express');
const userRoutes = express.Router();
const { upload } = require('../helpers/imageUpload');
const { verifyToken} = require('../helpers/verifyToken');
const {
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    addNewUser,
    changePassword
} = require('../controller/user.controller');

userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user', loginUser);
userRoutes.get('/get-all-users',verifyToken, getAllUsers);
userRoutes.get('/get-user',verifyToken, getUser);
userRoutes.put('/update-user',verifyToken, updateUser);
userRoutes.delete('/delete-user',verifyToken, deleteUser);
// userRoutes.put('/change-password',verifyToken, changePassword);
userRoutes.post('/add-user', upload.single('profileImage'), addNewUser);

module.exports = userRoutes;