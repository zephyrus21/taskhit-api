const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    createTask: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        user: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
});

module.exports = mongoose.model("Task", taskSchema);