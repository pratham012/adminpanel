/**
 * Imports
 */
const express = require("express");
const app = express();
app.use(express.json())
const authRole = require("../middlewares/auth")
const loginUser  = require("../controllers/login");
const listUsers = require("../controllers/listuser")
const updateUser = require("../controllers/update_user")
const deleteUser = require("../controllers/deleteUser")
 
 

 app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port : 3000`)
  })

  app.post('/',(req,res)=>{
    console.log(req.body)
    res.send("Welcome")
  })
 //
 // Login user
 //
 app.post('/loginuser',loginUser)
 
 
 //
 // List user
 //
 
 app.get('/alluser',listUsers)
 
 //
 // Update user 
 //
 
 app.post('/updateuser',updateUser)
 
 //
 // Delete user 
 //
 
 app.post('/deleteuser',authRole(3),deleteUser)
 
 
 