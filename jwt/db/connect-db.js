const mongoose = require('mongoose');

const connect = (urll)=>{ 
    return mongoose.connect(urll).then(()=> console.log('successfully connected to db')).catch((err)=> console.log(err))
}

module.exports = connect;