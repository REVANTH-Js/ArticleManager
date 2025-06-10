
const UserAuthor = require("../Model/userauthormodel")



async function creating(req,res){


    const newuserauthor=req.body;

    const userindb=await UserAuthor.findOne({email:newuserauthor.email})
    
    if(userindb!==null){
        if(newuserauthor.role===userindb.role){
            res.status(200).send({message:newuserauthor.role,payload:userindb});
        }
        else{
            res.status(200).send({message:"Invalid role"});

        }

    }
    else{
        let newuser=new UserAuthor(newuserauthor);
        let newuserauthordoc=await newuser.save();
        res.status(201).send({message:newuserauthordoc.role, payload:newuserauthordoc})
    }


}


module.exports=creating;