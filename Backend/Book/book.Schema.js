const mongoose=require("mongoose")

const BookSchema=new mongoose.Schema({
       id:{type:Number},
       title:{type:String,required:true},
       author:{type:String,required:true},
       publisher:{type:String,required:true},
       released_date:{type:String},
       summary:{type:String},
       image:{type:String},
       price:{type:Number,required:true},
       quantity:{type:Number,required:true},
       orders:{type:Number,required:true},
       language:{type:String,enum:["Hindi","English","Punjabi","Marathi"],default:"Hindi"}

})

const BookModal=mongoose.model("Book",BookSchema)

module.exports={BookModal}