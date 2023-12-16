const loginController=require("../controllers/loginControllers")
const express=require("express")
const router=express.Router()

router.route("/").get(loginController.getUsers).post(loginController.addUser)
router.delete("/:id",loginController.deleteUser)

module.exports=router