const {error} = require('../error')
const {StatusCodes} = require('http-status-codes')


const errorHandler = (err,req,res,next)=>{
    if(err instanceof error){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("something went wrong")
}

module.exports = errorHandler