const mongoose = require('mongoose')
const validator = require('validator')

const roomSchema = new mongoose.Schema({
    type:{
        type:String,
        required:[true, 'Please enter you room type.'],
        enum:{
            values:['private','shared'],
            message: 'Please, select between PRIVATE or SHARED'
        }
    },
    mainPic:{
        type:String,
        required:[true, 'Please give a picture for users.'],
    },
    contactPhone:{
        type:String,
        required:[true,'Please provide your phone number'],
        validate:validator.isNumeric,
        trim:true
    },
    address:{
        type:String,
        required:[true,'Please provide a password'],
    },
    city:{
        type:String,
        default:''
    },
    state:{
        type:String,
        default:''
    },
    country:{
        type:String,
        default:''
    },
    zip:{
        type:String,
        minlength:[6,'zip must have 6 digits'],
        maxlength:[6,'zip must have 6 digits'],
        validate:validator.isNumeric
    },
    utilitiesInc:{
        type:Boolean,
        default:false
    },
    rent:{
        type:Number,
        required:[true,'rent per month must be mentioned'],
    },
    createDate:{
        type: Date,
        default: Date.now(),
    },
    description:{
        type:String,
        default:''
    },
    owner:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    latitude: Number,
    longitude: Number,
})

mongoose.model("Room",roomSchema)