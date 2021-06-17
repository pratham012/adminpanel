/**
 * Imports
 */
 const jwt = require("jsonwebtoken")


 /**
  *  Verify Token and Check User Roles
  */
 
 const authRole =(accessRole)=>{
     return (req,res,next)=>{
         try{
             let token = req.headers.auth
             let decode = jwt.verify(token, 'secretkey')
            // console.log(decode)
             req.data = decode      
            // console.log(accessRole)
             if(req.data.userrole.includes(accessRole)){
             next()
             }
             else{
                 res.status(400).json({message : "You are not allowed to access this"})
             }
         }
         
         catch(error){
             console.log("Invalid Token",error)
             res.json({"error":"invalid token"})
         }
         }
 }
 
 module.exports =  authRole