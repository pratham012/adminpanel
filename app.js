const express = require('express')
const app = express()
app.use(express.json())

const appRouter = require('./route/index');
app.use('/',appRouter)

const http = require("http")
const server  = http.createServer(app)

server.listen(process.env.PORT || 3000 , ()=>{
  console.log("server is started on port 3000")
})