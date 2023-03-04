const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   name: String,
   city : String,
   password : String,
   unique : String,
   score : Number,
   lost : Number,
   win : Number,
   level : Number
},{
    versionKey : false,
    timestamps : true
})

const UserModel = mongoose.model('user',UserSchema);

module.exports={
    UserModel
}