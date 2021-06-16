/**
 * Imports
 */
 const database = require('../config/database')
 const db = require("knex")(database)
 
 
 /**
  * Update User
  */
 const updateUser = async(req,res)=>{
     try{
 
        //Declare an Object
        const data = {
            details : req.body
        }
        console.log(data)
 
        //
        //Update User
        //
 
       await update_user(data)
 
       //send Response
       res.status(200).json({ 'status': 200, 'message': "Details Updated"});
     } 
     catch(error){
         console.log(error);
         res.status(error.status || 500)
           .json({ status: error.status, message: error.message });
         throw error;
     }
 }
 
 
 /**
  *  Update User Details
  */
 
 const update_user = async(data)=>{
     try{
         return db('data')
         .where('id', '=', data.details.id)
         .update({
           name : data.details.name
         })
         .then(()=>{
             return
         })
         .catch((err) => {
             console.log(err);
             const error = new Error();
             error.status = err.status
             error.message = err.message;
             throw error;
           });
     }
     catch(error){
         console.log("error in catch", error);
         throw error;
     }
 }
 
 module.exports = updateUser