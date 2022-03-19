const Task = require("../models/task");

exports.createTask = async (req, res) => {
  console.log(req.body);
  const task = new Task({
    ...req.body,
  });

  console.log(task);

  try {
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
};
