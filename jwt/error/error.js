class CutomApiError extends Error{
    constructor(message, statusCode){
        super(message)
    }
}



module.exports = CutomApiError;
