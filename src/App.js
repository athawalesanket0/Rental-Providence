const express = require('express')
const mongoose = require('mongoose')
const App = express()
const PORT = 5000
const {MONGOURI} = require('./keys')

require('../models/user')



mongoose.connect(MONGOURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected',()=>{
  console.log("database connected successfully")
})

mongoose.connection.on('error',(err)=>{
  console.log("err in connecting:",err)
})

const middleWare = (req,res,next)=>{
  console.log("middleWare is executed!!")
  next()
}

App.use(express.json())
App.use(express.urlencoded({extended: true}))
App.use(require('../routes/signup'))
App.use(require('../routes/login'))
App.use(require('../routes/myprofile'))

App.get('/',middleWare,(req,res)=>{
  res.send("hello world")
})

App.get('/about',(req,res)=>{
  res.send("This is about page")
})

App.use((req,res,err) => console.log("chinmaya chiranjib"))
App.listen(PORT,()=>{
  console.log("server is running on the port:",PORT)
})

