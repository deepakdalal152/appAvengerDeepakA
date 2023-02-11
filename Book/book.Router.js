const express=require("express")
const { BookModal } = require("./book.Schema")


const book=express.Router()


book.get("/",async(req,res)=>{
    
    
    try {
        
       let bookData=await BookModal.find()

        res.send({data:bookData})


    } catch (error) {
        res.status(500).send(error.message)
    }

})








module.exports={book}