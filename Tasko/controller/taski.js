const datas = require('../models/taskData')
const {createError} = require('../error/error')

const getTasks = async (req,res)=>{
    const tasks = await datas.find({})
    res.status(201).json({tasks})
}

const createTasks = async (req,res)=>{
    try {
        const task = await datas.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(404).json({msg:error})
        
    }
}

const specificTasks = async (req,res,next)=>{
    try {
        const {id:taskId} = req.params
        const task = await datas.findOne({_id:taskId})
        if(!task){
            return next(createError(`no task with id : ${taskId}`,404))
        }
        res.status(201).json({task})
    } catch (error) {
        res.status(404).json({msg:error})
    }
}

const editTasks = async (req,res)=>{
    try {
        const {id:taskId} = req.params
        const task = await datas.findByIdAndUpdate(taskId,req.body,{new:true,validators:true})
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskId}`})
           }
        res.status(201).json({task})

    } catch (error) {
        res.status(404).json({msg:error})
    }
}

const deleteTasks = async (req,res)=>{
    try {
        const {id:taskId} = req.params
        const task = await datas.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskId}`})
        }
        res.status(201).json({task})
    } catch (error) {
        res.status(404).json({msg:error})
    }
}

module.exports ={
    getTasks,
    createTasks,
    specificTasks,
    editTasks,
    deleteTasks
}
