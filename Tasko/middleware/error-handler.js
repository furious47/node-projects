const {customApiError} = require('../error/error')
const errorHandler = (err,req,res,next)=>{
    if(err instanceof customApiError){
       return res.status(err.statusCode).json({msg:err.message})
    }
    res.status(500).json({msg:err})
}

module.exports = errorHandler