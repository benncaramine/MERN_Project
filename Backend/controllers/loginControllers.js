const loginService=require("../services/loginServices")
const getUsers=async(req,res)=>{
    try{
      const result=await loginService.getAllUsers()
      res.status(200).json(result)
    }catch(error){
        res.status(500).json(error)

    }
}
const addUser=async(req,res)=>{
    try{
        const result=await loginService.createUser(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json(error)

    }
}
const deleteUser=async (req,res)=>{
    try{
        const reslt= await loginService.deleteUserById(req.params.id)
        res.status(200).json(reslt)
    }catch(error){
        res.status(500).json({err:error})
    }
}


module.exports={getUsers,addUser,deleteUser}