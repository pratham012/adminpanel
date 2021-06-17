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
 
 

 app.listen(process.env.PORT, () => {
    console.log(`Server started on port : 3000`)
  })

  app.get('/',(req,res)=>{
    res.send("Welcome")
  })
 //
 // Login user
 //
 app.post('/loginuser',loginUser)
 
 
 //
 // List user
 //
 
 app.get('/alluser',authRole(1),listUsers)
 
 //
 // Update user 
 //
 
 app.post('/updateuser',authRole(2),updateUser)
 
 //
 // Delete user 
 //
 
 app.post('/deleteuser',authRole(3),deleteUser)
 
 
 