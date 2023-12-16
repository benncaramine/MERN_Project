const express=require("express")
const route=express.Router()
const livreControllers=require("../controllers/livresControllers")

route.get("/",livreControllers.getAllLivres)
route.get("/:id",livreControllers.getLivreById)
route.delete("/:id",livreControllers.deleteLivre)
route.post("/",livreControllers.createLivre)
route.put("/:id",livreControllers.updateLivreById)
module.exports=route
