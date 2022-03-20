const Task = require("../models/task");

exports.createTask = async (req, res) => {
  const task = new Task({
    ...req.body,
  });

  try {
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  await task.remove();

  res.status(200).json({
    success: true,
  });
};
