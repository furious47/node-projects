const {badReq} = require('../error')
const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes')

const login = async (req,res)=>{
    const {username,password}= req.body;
    if(!username || !password){
        throw new badReq('pls provide username or password');
    }
    const id = new Date().getDate()
    const token = jwt.sign({id, username},'hello trivediya paiya',{expiresIn: '10d'})
    
    res.status(StatusCodes.OK).json({msg:'token created',token})

}

const dashboard = async (req,res)=>{
    const randonNum = Math.floor(Math.random()*100);
    console.log(req.user);
    res.status(StatusCodes.OK).json({msg:`hello ${req.user.username}`,secret:`you're Authorised, your lucky num is ${randonNum}`})
}

module.exports = {
    login,
    dashboard
}