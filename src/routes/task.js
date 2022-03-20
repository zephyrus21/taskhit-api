const express = require("express");
const {
  createTask,
  getAllTasks,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

router.route("/task/create").post(createTask);
router.route("/tasks").get(getAllTasks);
router.route("/delete/:id").delete(deleteTask);

module.exports.task = router;
