<<<<<<< HEAD
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection Error:', err));

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, "You must provide a task title"] 
  },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model('Task', taskSchema);

const createTask = async () => {
  try {
    const newTask = await Task.create({
      title: "Learn Mongoose Validation",
      description: "Complete the daily challenge for the MongoDB bootcamp"
    });
    console.log("Task Created:", newTask);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("Current Tasks:", tasks);
};

const completeTask = async (taskId) => {
  await Task.findByIdAndUpdate(taskId, { status: 'completed' });
  console.log("Task marked as completed!");
};

const runChallenge = async () => {
  try {
    await Task.deleteMany();

    try {
      await Task.create({
        description: "This task has no title"
      });
    } catch (err) {
      console.log("Missing Title Error:", err.message);
    }

    try {
      await Task.create({
        title: "Invalid Status Task",
        status: "in-progress"
      });
    } catch (err) {
      console.log("Invalid Status Error:", err.message);
    }

    await createTask();
    await getAllTasks();

  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

runChallenge();
=======
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection Error:', err));

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, "You must provide a task title"] 
  },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model('Task', taskSchema);

const createTask = async () => {
  try {
    const newTask = await Task.create({
      title: "Learn Mongoose Validation",
      description: "Complete the daily challenge for the MongoDB bootcamp"
    });
    console.log("Task Created:", newTask);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("Current Tasks:", tasks);
};

const completeTask = async (taskId) => {
  await Task.findByIdAndUpdate(taskId, { status: 'completed' });
  console.log("Task marked as completed!");
};

const runChallenge = async () => {
  try {
    await Task.deleteMany();

    try {
      await Task.create({
        description: "This task has no title"
      });
    } catch (err) {
      console.log("Missing Title Error:", err.message);
    }

    try {
      await Task.create({
        title: "Invalid Status Task",
        status: "in-progress"
      });
    } catch (err) {
      console.log("Invalid Status Error:", err.message);
    }

    await createTask();
    await getAllTasks();

  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

runChallenge();
>>>>>>> f34934d (Resolve merge conflicts)
