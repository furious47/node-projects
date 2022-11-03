const {
    getalljobs,
    createjob,
    getonejob,
    updatejob,
    deletejob
} = require('../controller/jobs')

const express = require('express');
const router = express.Router();

router.route('/').get(getalljobs).post(createjob)
router.route('/:id').get(getonejob).delete(deletejob).patch(updatejob)

module.exports = router