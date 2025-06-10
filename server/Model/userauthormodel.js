const mongoose=require("mongoose")

const userAutherSchema=new mongoose.Schema({
 role:{
    type:String,
    required:true,
    // enum:['user','author','admin']
 },firstName:{
    type:String,
    required:true,
 },lastName:{
    type:String,
    required:true,
 },
 
 email:{
    type:String,
    required:true,
    unique:true,
 },

profileImageUrl:{
    type:String,
    // required:true,
},
isActive:{
    type:Boolean,
    default:true,
}


},{"strict":"throw"})


const UserAuthor=mongoose.model('userauthor', userAutherSchema)

//export
module.exports=UserAuthor;
