const mongoose = require('mongoose')


const jobsSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,'pls provide job']
    },
    position:{
        type:String,
        required:[true, 'pls provide company']
    },
    status:{
        type:String,
        // required:[true, 'pls provide status'],
        enum: ['interview','rejected','pending'],
        default:'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'login',
        required:[true, 'pls provide user']
    }
    
},{timestamps:true})

module.exports = mongoose.model('jobs',jobsSchema)