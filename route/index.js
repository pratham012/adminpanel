/**
 * Imports
 */
const express = require("express");
const router = express.Router();
const authRole = require("../middlewares/auth")
const loginUser  = require("../controllers/login");
const listUsers = require("../controllers/listuser")
const updateUser = require("../controllers/update_user")
const deleteUser = require("../controllers/deleteUser")
 

  router.get('/',(req,res)=>{
    res.send("Welcome.")
  })
 //
 // Login user
 //
 router.post('/loginuser',loginUser)
 
 
 //
 // List user
 //
 
 router.get('/alluser',authRole(1),listUsers)
 
 //
 // Update user 
 //
 
 router.post('/updateuser',authRole(2),updateUser)
 
 //
 // Delete user 
 //
 
 router.post('/deleteuser',authRole(3),deleteUser)
 
 
module.exports = router