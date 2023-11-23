const mongoose =require("mongoose")

const userSchema = mongoose.Schema({
    Name:String,
    Weight:Number,
    Color:String,
    Country:String,
    Cost:Number

}
,{timestamps:true})

module.exports = mongoose.model("ShippingUsers", userSchema)