const mongoose = require('mongoose')

// const connectionstring = 'mongodb+srv://kaneki:othabase@node-proj-tasko.pa4mku6.mongodb.net/based?retryWrites=true&w=majority'

const connectDB = (url)=>{
    return mongoose.connect(url).then(()=> console.log('Successfully conncected to DB...')).catch((err)=> console.log(err))
}

module.exports = connectDB
