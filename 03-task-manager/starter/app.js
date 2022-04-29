const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()


// MIDDLEWARE

app.use(express.json())

// ROUTES
app.get('/hello', (req, res) => {
  res.status(200).send('<h2>Task Manager App</h2>')
})

app.use('/api/v1/tasks', tasks)

// app.get('api/v1/tasks') 	      - get all the tasks
// app.post('api/v1/tasks')	      - create a new task
// app.get('api/v1/tasks/:id')	  - get a single task
// app.patch('api/v1/tasks/:id')  - update task
// app.delete('api/v1/tasks/:id') - delete task

const PORT = 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT,
      console.log(`Server is listening on port ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}

start()