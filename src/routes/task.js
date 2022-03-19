const express = require("express");
const {
    createTask,
    getLoggedInTask,
    getAllTasks,
    addTask,
    deleteTask,
    updateTask,
} = require("../controllers/taskController");
const router = express.Router();

router.route("/task/create").post(createTask);
router.route("/task/:id").get(getLoggedInTask);
router.route("/myTask").get(getLoggedInTask);
router.route("/allTask").get(getAllTasks);
router.route("/addTask").post(addTask);
router.route("/deleteTask").post(deleteTask);
router.route("/updateTask").post(updateTask);

module.exports = router;