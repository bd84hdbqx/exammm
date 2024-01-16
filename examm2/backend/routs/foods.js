const express=require("express")
const router=express.Router()
const Foods=require("../models/foodModels")

router.post('/', async(req, res) => {
   const postElem=req.body
   const newFoods=new Foods(postElem)
   await newFoods.save()
   res.send(newFoods)
  })

//get 
router.get('/', async(req, res) => {
   
    const getallFoods=await Foods.find()
    res.send(getallFoods)
   })
//get by id
router.get('/:id', async(req, res) => {
    const id=req.params.id
    const getoneFoods=await Foods.findById(id)
    res.send(getoneFoods)
   })
//delete
router.delete('/:id', async(req, res) => {
    const id=req.params.id
    const deleteFoods=await Foods.findByIdAndDelete(id)
    res.send(deleteFoods)
   })


module.exports=router