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
        type: String
    },
    password: {
        type: String,
        require:true
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('users', userSchema);