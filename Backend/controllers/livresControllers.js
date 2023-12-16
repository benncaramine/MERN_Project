const livService=require("../services/livreServices")

const getAllLivres=async (req,res)=>{
    try{
        const result=await livService.getLivres()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
   
}

const getLivreById=async (req,res)=>{
    try{
        const result=await livService.getLivreById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addLivre=(req,res)=>{
    livre.create(req.body)
    .then(result=>res.json({msg:"le livre est bien ajouté"}))
    
}

const deleteLivre=async (req,res)=>{
    try{
        const reslt= await livService.deleteLivreById(req.params.id)
        res.status(200).json(reslt)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const createLivre=async (req,res)=>{
    try{
        const result= await livService.addLivre(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
   
}

const updateLivreById=async (req,res)=>{
    try{
        const result= await livService.updateLivre(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
   
}

module.exports={
    getAllLivres,
    getLivreById,
    addLivre,
    deleteLivre,
    createLivre,
    updateLivreById


}