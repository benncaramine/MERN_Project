const catService=require("../services/categoryServices")


const createCategory=async(req,res)=>{
    try{
        console.log(req.body)
const result= await catService.addCategory(req.body)
res.status(200).json(result) 
    }catch(error){
        res.status(500).json({err:error}) 
    }
}

const getCategorie=async (req,res)=>{
    try{
const result= await catService.getAllCategories()
res.status(200).json(result)
    }catch(error){
res.status(500).json(error)
    }
}
const deletCategory=async (req,res)=>{
    try{
        await catService.deleteCategoryById(req.params.id)
        res.status(200).json("Catégorie bien supprimée")
    }catch(error){
        res.status(500).json(error)
    }
}
const getCategoryById=async (req,res)=>{
    try{
        const result=await catService.geCategoryById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}


const updateCategoryById=async (req,res)=>{
    try{
        const result= await catService.updatCategory(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
   
}

module.exports={createCategory,getCategorie,deletCategory,getCategoryById,updateCategoryById}