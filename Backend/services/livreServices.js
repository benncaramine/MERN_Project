const Livre=require("../modules/Livres")

const getLivres= async()=>{
    return await Livre.find().populate("category")
    
}
const getLivreById=async (id)=>{
    return await Livre.findOne({_id:id})
    
}
const deleteLivreById=async (id)=>{
    return await Livre.findByIdAndDelete({_id:id})
   
}
const addLivre=async (livre)=>{
    return await Livre.create(livre);
    
}
const updateLivre=async (livre)=>{
     return await Livre.findOneAndUpdate(livre)
    }
module.exports={
    getLivres,
    getLivreById,
    deleteLivreById,
    addLivre,
    updateLivre
}

