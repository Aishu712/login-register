const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()
const EmployeeModel = require('./models/Employee')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/database')

app.post('/register',(req,res) => {
  EmployeeModel.create(req.body)
  .then(employee => res.json(employee))
  .catch(err => res.json(err))

})
app.post('/login',(req,res) => {
  const {email,password} = req.body
  EmployeeModel.findOne({email:email})
  .then(user => {
    if(user){
       if(user.password === password){
          res.json("Success")
        }
      else{
          res.json("Password id incorrect!")
        } 
    } 
    else{
      res.json("Account doesn't exist")
    }  
  })

})

app.listen(3001,() => {
  console.log("Server is running");
})