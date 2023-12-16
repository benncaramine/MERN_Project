const express=require("express");
const app=express();
const mongoose=require("mongoose")
const loggingMiddelwares=require("./middelwares/loggingMiddelwares")
const route=require("./routes/livresRoutes")
const catRouter=require('./routes/categoryRoutes')
const loginRouter=require("./routes/loginRoutes")
const cors=require("cors")

mongoose.set('strictQuery', false);
require("dotenv").config()
mongoose.connect(process.env.MONGO_URI,{dbname:"db_livre"})
.then((result)=>app.listen(3366,()=>console.log("Server is running")))
.catch((err)=>console.log(err))
app.use(cors())
app.use(express.json());

app.use(loggingMiddelwares.loggingParams)
app.use(loggingMiddelwares.loggingUrls)

app.use("/users",loginRouter)
app.use("/livres",route)
app.use("/",catRouter)


app.get("/",(req,res)=>{
  console.log("Home Page")
  res.send("<h2> Bienvenue dans notre app express  </h2>");
});