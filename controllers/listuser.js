/**
 * Imports
 */
 const database = require("../config/database");
 const db = require("knex")(database);
 
 /**
  * List User
  */
 const listUser = async(req, res) =>{
     try{
            // Declare an object 
           let data={}
 
           //
           // Read all users
           //
 
           const rows = await allUsers()
 
           //
           // Send Response
           //
           await res.status(200).json({ 'status': 200, 'result': rows});
     }
     catch(error){
         console.log(error);
         res.status(error.status || 500)
           .json({ status: error.status, message: error.message });
         throw error;
     }
 }
 
 
 /**
  *  Read All users
  */
 
 const allUsers = async()=>{
     try{
     return db.select()
     .from("data")
     .then((rows) => {
       return rows
     })
     .catch((err) => {
         console.log(err);
         const error = new Error();
         error.status = err.status
         error.message = err.message;
         throw error;
       });
     } catch (error) {
         console.log("error in catch", error);
         throw error;
       }
     }
 
     module.exports = listUser