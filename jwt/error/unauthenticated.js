const customApiError = require('../error/error')
const {StatusCodes} = require('http-status-codes')


class Unauthenticated extends customApiError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}



module.exports = Unauthenticated;
