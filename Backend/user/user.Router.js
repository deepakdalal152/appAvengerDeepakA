const express=require("express")
const { UserModal } = require("./user.Schema")

const user=express.Router()


user.post("/login",async(req,res)=>{
         
       const {email,password}=req.body
    try {
       
        let userData=await UserModal.find({email,password})
        if(userData.length>0){
            res.send({message: "User login successfully", data:userData})
        }
        else{
            res.status(500).send({message:"user not found"})
        }


    } catch (error) {
        res.status(500).send({message:"password"})
    }

})

user.post("/",async(req,res)=>{
    const {name,email,password}=req.body

    try {
          
            
             let saveUserInfo=new UserModal({name,email,password})
             await saveUserInfo.save()

             res.send({message:"User signup successfully", data:saveUserInfo})
          

        
    } catch (error) {
        res.status(500).send(error.message)
    }
})



module.exports={user}