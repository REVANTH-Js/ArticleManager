const exp = require("express");
const authorApp = exp.Router();
const expasyhand=require("express-async-handler")
const creating=require('./creating')
const Article = require('../Model/articlemodel')
const {requireAuth,clerkMiddleware}= require("@clerk/express")
require('dotenv').config();
authorApp.use(clerkMiddleware)
//apis

authorApp.post('/user', expasyhand(creating))
authorApp.post('/author', expasyhand(creating))


authorApp.post('/article', expasyhand(async(req,res)=>{
    const newarticleobj=req.body;
    const newarticle=new Article(newarticleobj);
    const articleobj= await newarticle.save();
    res.status(201).send({message:"article published", payload:articleobj})
}))


authorApp.get('/articles',
     requireAuth({signInUrl:"unauthorized"}),
      expasyhand(async(req,res)=>{
    const list=await Article.find({isArticleActive:true});
    res.status(200).send({message:"articles", payload:list});
}))


authorApp.get('/unauthorized',(req,res)=>{
    res.send({message:"Unauthorized request"})
})

authorApp.put('/article/:articleId',  
    requireAuth({signInUrl:"unauthorized"}),
    expasyhand(async(req,res)=>{
const edited=req.body;
const dbres=await Article.findByIdAndUpdate(edited._id, {...edited}, {returnOriginal:false})
res.status(200).send({message:"Modified", payload:dbres})
}))

authorApp.put('/articles/:articleId', expasyhand(async(req,res)=>{
    const edited=req.body;
    const dbres=await Article.findByIdAndUpdate(edited._id, {...edited}, {returnOriginal:false})
    res.status(200).send({message:"Modified", payload:dbres})
    }))
    
    



module.exports = authorApp;
