const notFound = (req,res,next)=>{
    res.status(404).send('Url ahh nondatha da bundha')
}

module.exports = notFound