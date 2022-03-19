const express = require("express");
const { createTask } = require("../controllers/taskController");
const router = express.Router();

router.route("/task/create").post(createTask);
// router.route("/allTask").get(getAllTasks);

module.exports.task = router;
