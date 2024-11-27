const express = require('express')
const router = express.Router()
//const mongoose = require('mongoose')
//const User = mongoose.model("User")
const auth  = require("../auths/loginAuth")


router.get('/login',(req,res)=>{
    res.send('This is login page')
})

router.post('/login',auth,(req,res)=>{
    //from login req = {user_id,password} ,user_id can be email or phone number
    //console.log(req.body)
    
})


module.exports = router