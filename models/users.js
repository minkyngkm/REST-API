const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true
    },
    password: {
        type: Number,
        require: true
    },
    date: {
        type : Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model( "User", usersSchema)