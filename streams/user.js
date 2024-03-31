const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    email: String,
    age: Number,
    salary: Number,
    isActive: Boolean
},{
    timeStamp : true
})

module.exports = mongoose.model('users',userSchema)