const express = require('express')
const router = express.Router()
const {
    getTasks,
    createTasks,
    specificTasks,
    editTasks,
    deleteTasks
} = require('../controller/taski')

router.route('/').get(getTasks).post(createTasks)
router.route('/:id').get(specificTasks).patch(editTasks).delete(deleteTasks)



module.exports = router