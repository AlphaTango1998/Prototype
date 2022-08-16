const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    phone:String,
    dob:String,
    password:String
});

module.exports = mongoose.model("userdatas",usersSchema);
