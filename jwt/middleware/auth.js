const {unAuth}  = require('../error')
const jwt = require('jsonwebtoken');

const authMdddleware = async (req,res,next)=>{
    const header = req.headers.authorization;
    if(!header || !header.startsWith('Bearer ')){
        throw new unAuth('no token provided')

    }
    try {
        const spliter = header.split(' ')[1]
        const decoded = jwt.verify(spliter,'hello trivediya paiya')
        console.log(decoded);
        const {id, username} = decoded;
        req.user = {id, username}

        next()
        
        

    } catch (error) {
        // console.log(error);
        throw new unAuth('not authorized')
    }
} 

module.exports = authMdddleware;