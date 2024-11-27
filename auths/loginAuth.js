const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../src/keys")


const login = (req,res,next)=>{
    //console.log(req.body,"login auth executed")
    const {user_id,password} = req.body
    if(!user_id || !password){
        return res.status(422).json({error:"Please give user id and password."})
    }
    User.findOne({$or:[{email:user_id},{phone:user_id}]}).select('password')
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid user id or password."})
        }
        //console.log(savedUser)
        bcrypt.compare(password,savedUser.password)
        .then((doMatch)=>{
            if(doMatch){
                //res.json({message:"successfully signed in."})
                //console.log(JWT_SECRET)
                // const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                // res.json({token:token})
                const token = jwt.sign({_id : savedUser._id},JWT_SECRET)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error:"Invalid user id or password."})
            }
            next()
        })
        .catch(err=>{
            console.log("error in login:",err)
        })
    })
    
  }

  module.exports = login