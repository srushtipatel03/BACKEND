const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: {
        type: String
    },
    gender:{
        type: String,
        enum: ['Male', 'Female']
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    isDelete:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('users', userSchema);
