//CONTROLLER

// app.get('api/v1/tasks') 	      - get all the tasks
// app.post('api/v1/tasks')	      - create a new task
// app.get('api/v1/tasks/:id')	  - get a single task
// app.patch('api/v1/tasks/:id')  - update task
// app.delete('api/v1/tasks/:id') - delete task

const getAllTasks = (req, res) => {
  res.send('<h2>GET all tasks</h2>')
}

const createTask = (req, res)=> {
  res.json(req.body)
}

const getTask = (req, res)=> {
  res.json({ id:req.params.id })
}

const updateTask = (req, res)=> {
  res.send({ id:req.params.id })
}

const deleteTask = (req, res)=> {
  res.send({ id:req.params.id })
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}