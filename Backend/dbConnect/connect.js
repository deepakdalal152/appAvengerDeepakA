const mongoose=require("mongoose")
require("dotenv").config()


const dbconnect=()=>{
      return mongoose.connect(process.env.MONGOOSE_URL)
}

module.exports=dbconnect