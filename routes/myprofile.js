const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const requiredlogin = require("../auths/requiredLogin")

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((el) => {
      if (allowedFields.includes(el)) {
        newObj[el] = obj[el]; // The same as: name = req.body.name
      }
    });
    return newObj;
  }; //Array with the allowed arguments to be updated

router.get('/myprofile',requiredlogin,(req,res)=>{
    //res.send('This is myprofile page')
    // res.json(req.user)  // user data send to fill up the required places
    User.findById({_id:req.user._id})
        .then(myProfile => {
           // console.log(myProfile);
            res.json(myProfile)
        })
        .catch(err => {
            console.log(err);
            res.status(500).send()
        })
})

router.patch('/updateMe',requiredlogin,(req,res)=>{
    

    //console.log("Chinmaya",req.body);
    const filterBody = filterObj (
        req.body,
        'age',
        'city',
        'profession',
        'about',
        'profilePic',
        'gender',
        'maritalStatus'
    )

     User.findByIdAndUpdate(req.user._id, filterBody, {
        new: true,
        runValidators: true,
    })
    .then((result) => res.status(200).send())
    .catch((err) => {
        console.log(err.message + "\n" + err)
        res.status(500).send()
    })
   
    
    

})


module.exports = router

//console.log(req.user)
    // const {name,profilePic,city,age,about,profession} = req.body
    // //console.log(req.body)
    // User.findByIdAndUpdate(req.user._id,
    //     {
    //         name,
    //         profilePic,
    //         about,
    //         profession,
    //         city,
    //         age
    //     },
    //     {
    //         new:true
    // })
    // .exec((err,result)=>{
    //     if(err){
    //         return res.status(422).json({error:err})
    //     }
    //     else{
    //         //console.log(result)
    //         res.json(result)
    //     }
    // })