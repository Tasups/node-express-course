const express = require('express')
const router = express.Router()

const { 
  getAllTasks, 
  createTask, 
  getTask, 
  updateTask, 
  deleteTask 
} = require('../controllers/tasks')

// ROUTE FOR GETTING OR CREATING A TASK
router.route('/').get(getAllTasks).post(createTask)

// ROUTE FOR GETTING, UPDATING, OR DELETING A SINGLE TASK
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router