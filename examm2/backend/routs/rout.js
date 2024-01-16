const express=require("express")
const router=express.Router()

const Foods=require("./foods")
router.use("/foods",Foods)

module.exports=router