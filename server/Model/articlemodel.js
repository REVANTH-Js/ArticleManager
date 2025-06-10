const mongoose = require('mongoose')

const authorDataSchema = new mongoose.Schema({
    nameOfAuthor:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
       
    },
    profileImageUrl:{
        type:String,
        
    }
},{"strict":"throw"});

const commentschema=new mongoose.Schema({
    nameOfUser:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required : true
    }
},{"strict":"throw"})


const articledata= new mongoose.Schema({
    authorData:  authorDataSchema, 
    

articleId:{
    type:String,
    required:true

},
title:{
    type:String,
    required:true,
},
category:{
    type:String,
    required:true
},
content:{
    type:String,
    required:true
},
dateOfCreation:{
    type:String,
    required:true
},
dateOfModification:{
    type:String,
    required:true
},
comments: [commentschema],

isArticleActive:{
    type:Boolean,
    required:true

}


},{"strict":"throw"});





const Article= mongoose.model('article', articledata);
module.exports= Article;
