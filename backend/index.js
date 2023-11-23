const express = require('express')
const app = express()
const cors =require('cors')
require('./db')
const Users = require('./models/Users')


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post("/user",async (req,res)=>{
  try{
    const data =req.body;
  const createdUser =new Users (data);
  await createdUser.save()
  // console.log(data);
  res.send("User created");
  }
  catch(error){
    res.send(error);
  }
})

// GET OPERATION to find 
app.get("/user", async function(req,res){
  try{
    const userList = await Users.find()
    res.send(userList)
  }
  catch(error){
    res.send(error)
  }
})

// PUT OPERATION UPDATING
app.put("/user/:id", async function(req,res){
  try{
    const data =req.body;
    await Users.updateOne({_id:req.params.id},{$set:data})
    res.send("User updated")
  }
  catch(error){
    res.send(error)
  }
})

// DELETE DATA
app.delete("/user/:id", async function(req,res){
  try{
    await Users.deleteOne({_id:req.params.id})
    res.send("User deleted")
  }
  catch(error){
    res.send(error)
  }
})

app.get("/user/:id", async function (req,res){
  try{
    const user = await Users.findById({ _id:req.params.id})
    res.send(user)
  }
  catch(error){
    res.send(error);
  }
})
app.listen(5000 , function(){
    console.log("App is listening to 3000 Port sucessfully")
})