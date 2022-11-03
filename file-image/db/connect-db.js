const mongoose = require('mongoose')

const connect = async (url)=>{
    return await mongoose.connect(url).then(()=> console.log('successfully connected to db')).catch((err)=> console.log(err))
}

module.exports = connect