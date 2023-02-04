const mongoose = require('mongoose')
const Schema =mongoose.Schema

const userSchema =new Schema({
  b_name:{type: String},
  b_type:{type: String},
  b_size:{type: String},
  b_address:{type :String},
  email:{type: String},
  password:{ type: String}
},{timestamps:true})

const User = mongoose.model('User', userSchema)
module.exports =User