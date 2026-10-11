import Task from "../models/task.js";

export const getAllUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.uid });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: `Error occurred: ${error}` });
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({
      userId : req.user.uid,
      title,
      description,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: `Error occurred: ${error}` });
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: id, userId: req.user.uid },
      { title, description, status },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: `Error occurred: ${error}` });
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id, userId: req.user.uid });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: `Error occurred: ${error}` });
  }
}
