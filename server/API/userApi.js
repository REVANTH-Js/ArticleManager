const exp = require("express");
const userApp = exp.Router();
const UserAuthor=require("../Model/userauthormodel")
const expasyhand=require("express-async-handler")
//apis
const Article = require('../Model/articlemodel')
const creating=require('./creating')


//userApp.get("/user-api/user",async(req,res)=>{
    // res.send("From user api");
// let users = await UserAuthor.find()
// res.send(users)
// })


userApp.post('/user', expasyhand(creating))

userApp.put('/comments/:articleid', expasyhand(async(req,res)=>{
    const gotcomment=req.body;

    const articlewithcomment=await Article.findOneAndUpdate({articleId:req.params.articleid},{ $push:{comments:gotcomment}},{returnOriginal:false});
    res.send({message:"comment added", payload:articlewithcomment})
}))

module.exports = userApp;
