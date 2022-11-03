const customApiError = require('../error/error')
const {StatusCodes} = require('http-status-codes')

class badReq extends customApiError{
    constructor(message, statusCode){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}



module.exports = badReq;
