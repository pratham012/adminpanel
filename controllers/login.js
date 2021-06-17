/**
 * Imports
 */
 const database = require("../config/database");
 const db = require("knex")(database);
 const jwt = require("jsonwebtoken")
 
 /**
  * Login User
  */
 
 const loginUser = (req, res) => {
 
   try {
 
     //Declare an object
     const data = {
       loginCredential: req.body,
     };
 
     //
     // Login user
     //
      checkLogin(data,res);
 
     //
     // Send Response
     //
     res.status(200).json({ 'status': 200, 'message': "Login Successfully"});
 
   } catch (error) {
 
     console.log(error);
     res.status(error.status || 500)
       .json({ status: error.status, message: error.message });
     throw error;
   }
 };
 
 /**
  * Check login details
  */
 
 const checkLogin = async (data,res) => {
   try {
 
   //   db('login')
   // .join('userrole', 'login.id', '=', 'userrole.userid')
   // .select().where('login.id' , data.loginCredential.id)
     return db.select()
       .from("login")
       .where({
         email: data.loginCredential.email,
         password: data.loginCredential.password,
       })
       .then((row) => {
         console.log(row);
          if(row.length > 0) {
         db('login')
         .join('userrole', 'login.id', '=', 'userrole.userid')
          .select().where('login.id' , row[0].id).then((rows) =>{
           //console.log(rows);
           let role = []
           rows.map((row) =>{
             role.push(row.userrole)
           })
           
            let token =  jwt.sign({
               userid : rows[0].userid,
               userrole : role
             }, 'secretkey', { expiresIn: "1h" });
             console.log("Generated Token, " , token)
             res.status(200).json({"token": token})
           
          }) .catch((err) => {
           console.log(err);
           const error = new Error();
           error.status = 400;
           error.message = "Invalid Username/Password";
           throw error;
         });
       } else{
         const error = new Error();
             error.status = 400;
             error.message = "Invalid Username/password";
             throw error;
       }
       })
       .catch((err) => {
         console.log(err);
         const error = new Error();
         error.status = 400;
         error.message = err.message;
         throw error;
       });
   } catch (error) {
     console.log("error in catch", error);
     throw error;
   }
 };
 
 module.exports = loginUser;
 