const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port =process.env.PORT || 3000
const mongoose = require('mongoose');
require("dotenv").config()
app.use(bodyParser.json())
const MainRout=require("./routs/rout")
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect")
    } catch (error) {
        console.log(error)
    }
}
app.use("/api",MainRout)


app.listen(port, () => {
    connect()
  console.log(`Example app listening on port ${port}`)
})