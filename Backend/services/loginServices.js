const User=require("../modules/User")
const bcrypt=require("bcrypt")

async function getAllUsers(){
    return await User.find({})
}
async function createUser(u){
    const salt=await bcrypt.genSalt()
    const hashedPassword=await bcrypt.hash(u.password,salt)
    u.password=hashedPassword
    return await User.create(u)
}
const deleteUserById=async (id)=>{
    return await User.findByIdAndDelete({_id:id})
   
}

module.exports={getAllUsers,createUser,deleteUserById}