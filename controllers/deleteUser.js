/**
 * Imports
 */
 const database = require('../config/database')
 const db = require("knex")(database)
 
 
 /**
  * Delete User
  */
 
 const deleteUser = async(req,res)=>{
 try{
 
     //Declare an Object 
     data = {
         details : req.body
     }
 
 
     // Delete User
 
     await delete_user()
 
      //send Response
      res.status(200).json({ 'status': 200, 'message': "Deleted Succesfully"});
 }
 catch(error){
     console.log(error);
     res.status(error.status || 500)
       .json({ status: error.status, message: error.message });
     throw error;
 }
 
 }
 
 
 /**
  *  Delete User Details
  */
 
 const delete_user = async()=>{
 try{
     return db('data')
     .where('id','=',data.details.id)
     .del()
     .then(()=>{
         return
     })
     .catch((err)=>{
       const error = new Error()
       error.status = err.status
       error.message = err.message
       throw error
     })
 }
 catch(error){
 console.log('error in catch',error)
 throw error;
 }
 }
 
 
 module.exports = deleteUser