const exp=require("express")
const userApp=require("./API/userApi")
const adminApp=require("./API/adminApi")
const authorApp=require("./API/authorApi")
const cors=require('cors');
const app=exp();
app.use(cors({
    origin: 'http://localhost:5173', // or whatever port your frontend runs on
    credentials: true
  }));
require('dotenv').config(); //process.env

const port=process.env.PORT || 4000;
const mongoose=require("mongoose");

mongoose.connect(process.env.DBURL)
.then(()=>app.listen(port,()=>{
    console.log("connected to db");
    console.log(`server is running on port ${port}`);
}))
 .catch((err)=>console.log(err));
app.use(exp.json());


 app.use("/user-api",userApp);
 app.use("/admin-api",adminApp);
 app.use("/author-api",authorApp);



 app.use((err,req,res,next)=>{
    console.log("error is ", err);
    
    res.send({message:err.message});
 }
)