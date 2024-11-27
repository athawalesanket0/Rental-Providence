const mongoose = require('mongoose')
const User = mongoose.model("User")
const validator = require('validator')


const signup = (req,res,next)=>{
    //console.log(req.body,"signup auth executed")
    const {name,email,phone,password} = req.body
    if(!email || !phone || !password || !name){
        return res.status(422).json({error:"Please fill up all the required fields"})
    }
    if(!validator.isNumeric(phone)){
        return res.status(422).json({error:"Kindly use a valid phone number."})
    }
    if(!validator.isEmail(email)){
        return res.status(422).json({error:"Kindly use a valid email."})
    }

    User.findOne({$or:[{email:email},{phone:phone}]})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists with this email or phone number."})
        }
        next()
    })
    .catch(err=>{
        console.log("error in finding user:",err)
    })
    
  }

  module.exports = signup