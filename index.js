const express = require('express')
const cors=require("cors")
const dbconnect = require('./dbConnect/connect')
require("dotenv").config()
const PORT=process.env.CURRENT_MODE=="DEV" ? process.env.DEV_PORT : process.env.PROD_PORT


// Import  routers
const {user}=require("./user")
const {book}=require("./Book")



const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use("/user",user)
app.use("/book",book)




app.get('/', (req, res) => res.send('hello world'))


app.listen(PORT,async() => {
    await dbconnect()
    console.log(`server started on port ${PORT}`)

})