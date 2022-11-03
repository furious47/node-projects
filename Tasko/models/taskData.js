const mongoose = require('mongoose')

const taskData = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'name should be provided'],
        trim:true,
        max:[20, `name can't extended to more than 20 char`]
    },
    valt: {
        type:Boolean,
        default:false
    }

})

module.exports = mongoose.model('tasks',taskData)