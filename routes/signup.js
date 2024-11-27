const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const auth  = require("../auths/signupAuth")
const requiredlogin = require("../auths/requiredLogin")

router.get('/signup',(req,res)=>{
    res.send('This is signup page')
})

router.post('/signup',auth,(req,res)=>{
    //console.log(req.body)
    const {name,email,phone,password} = req.body
    bcrypt.hash(password,12)
    .then(hashedPass=>{
        const user = new User({
            email,
            name,
            password:hashedPass,
            phone
        })
        user.save()
        .then(user=>{
            res.json({message:"saved successfully"})
        })
        .catch(err=>{
            console.log("error in saving:",err)
        })
    })
    .catch(err=>{
        console.log("error in hashing:",err)
    })
})


module.exports = router