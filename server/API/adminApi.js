const exp = require("express");
const adminApp = exp.Router();

//apis

adminApp.get("/",(req,res)=>{
    res.send("From admin api");
})


module.exports = adminApp;
