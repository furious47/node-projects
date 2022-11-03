const mongoose = require('mongoose')

const data = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'name should be provided'],
        max : [20, "name shouldn't be above 20 character"],
        trim : true
    },
    price : {
        type : Number,
        required : [true, "product name must be provided"]
    },
    featured : {
        type : Boolean,
        default : false
    },
    rating : {
        type : Number,
        default : 4.5
    },
    createdat : {
        type : Date,
        default : Date.now()
    },
    company : {
        type : String,
        enum : {
            values : ['ikea', 'liddy', 'caressa', 'marcos'],
            message : '{value} is not supported'
        }
    }

})

module.exports = mongoose.model('Products',data)