const Category=require("../modules/Category")

const addCategory= async (c)=>{
return await Category.create(c)
}

const getAllCategories=async()=>{
   return await Category.find()
}
const deleteCategoryById=async(id)=>{

    return await Category.findByIdAndDelete({_id:id})
}
const geCategoryById=async (id)=>{
    return await Category.findOne({_id:id})
    
}
const updatCategory=async (c)=>{
    return await Category.findOneAndUpdate(c)
   }
module.exports={addCategory,getAllCategories,deleteCategoryById,geCategoryById,updatCategory}