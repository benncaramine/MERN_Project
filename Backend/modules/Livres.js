const mongoose=require("mongoose")

const livreSchema=new mongoose.Schema({
    nom:String,
    description:String,
    isbn:String,
    auteur:String,
    editeur:String,
    date_edition:Date,
    image:String,
    category:{
        type:mongoose.Types.ObjectId, 
        ref:"Category"
    }
})
const livre=mongoose.model("Livre",livreSchema)
module.exports=livre 