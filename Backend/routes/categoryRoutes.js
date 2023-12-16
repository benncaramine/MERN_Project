const express=require("express")
const route=express.Router()
const catController=require("../controllers/categoryControllers")
route.route("/categories").get(catController.getCategorie).post(catController.createCategory)
route.delete("/categories/:id",catController.deletCategory)
route.get("/categories/:id",catController.getCategoryById)
route.put("/categories/:id",catController.updateCategoryById)
module.exports=route
