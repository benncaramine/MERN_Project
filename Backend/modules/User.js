const mongoose=require("mongoose")
const userSchem=new mongoose.Schema({
    fName:String,
    lName:String,
    email:String,
    password:String,
    photo:String 
})
const User=mongoose.model("User",userSchem)
module.exports=User