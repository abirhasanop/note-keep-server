const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        default: "Untitled"
    },
    description: {
        type: String,
        default: "No description for this task"
    },
    img: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_6mO1a496PTeIRBhAUGjkfGzeEEMiIzz2g&usqp=CAU"
    },
    status: {
        type: String,
        enum: ["complete", "incomplete"],
        required: true
    }
})

module.exports = taskSchema
