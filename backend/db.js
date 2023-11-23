const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://abhinava03kks:abhinavamongodb@cluster0.tzfaz9x.mongodb.net/?retryWrites=true&w=majority").then((response) => {
    console.log("Connected to database")
})
    .catch((error)=>{
    console.log(error)
})