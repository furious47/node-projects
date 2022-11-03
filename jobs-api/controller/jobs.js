const job = require('../models/jobs')
const {badReq} = require('../error')
const {notFound} = require('../error')

const getalljobs = async (req,res)=>{
    const jobs = await job.find({createdBy:req.user.userId}).sort('createdAt');
    res.status(200).json({jobs, count:jobs.length})
}

const createjob = async (req,res)=>{
    // const {company,status,position} = req.body;
    req.body.createdBy = req.user.userId
    console.log(req.user.userId)
    const jobs = await job.create(req.body);
    res.status(200).json({jobs})
}

const getonejob = async (req,res)=>{
    const {
        user : {userId},
        params:{id:jobsId}
    } = req
    // if(!userId || !jobsId){
    //     throw new badReq('provide user and jobsId')
    // }
    const jobs = await job.findOne({_id:jobsId,createdBy:userId})
    if(!jobs){
        throw new notFound(`no jobs in this id ${jobsId}`)
    }
    res.status(200).json({jobs})
}

const updatejob = async (req,res)=>{
    const {
        body:{company,position},
        params : {id:jobId},
        user : {userId}
    } = req
    if(company === '' || position === ''){
        throw new badReq("company and poition fields shouldn't be empty")
    }
    const jobs = await job.findByIdAndUpdate({_id:jobId,createdBy:userId},req.body,{new:true,validators:true})
    if(!jobs){
        throw new notFound(`there;s no job with id ${jobId}`)
    }
    res.status(200).json({jobs})
} 

const deletejob = async (req,res)=>{
    const {
        params : {jobId},
        user : {id:userId}
    } = req
    const jobs = await job.findByIdAndRemove({_id:jobId,createdBy:userId})
    if(!jobs){
        throw new notFound(`there's no job with id ${jobId}`)
    }
    res.status(200).send()
}

module.exports = {
    getalljobs,
    createjob,
    getonejob,
    updatejob,
    deletejob
}
