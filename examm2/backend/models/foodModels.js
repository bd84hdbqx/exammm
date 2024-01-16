const mongoose = require('mongoose');
const FoodSchema=mongoose.Schema({
    name:{type:String},
    ingredient:{type:String},
    price:{type:Number}
},
{
    timestamps:true
})

const Foods=mongoose.model("foods",FoodSchema)
module.exports=Foods