import mongoose from "mongoose";

const users = new mongoose.Schema({
  name : {
    type : String,
    required : true
  }
},{
    timestamps : true
})


const User = mongoose.model('user',users);

module.exports = User;