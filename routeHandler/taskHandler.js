const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()
const taskSchema = require("../Schemas/taskSchema")
const Task = new mongoose.model("Task", taskSchema)


// get all tasks
router.get("/", async (req, res) => {
    try {
        const result = await Task.find({})
        res.send({
            status: true,
            message: "Succesfully got all tasks",
            data: result
        })
    } catch (err) {
        res.send({
            status: false,
            message: "There was a server side error while finding all tasks",
        })
    }
})

// get a task
router.get("/edit/:id", async (req, res) => {
    try {
        const result = await Task.findOne({ _id: req.params.id })
        res.send({
            status: true,
            message: "Succesfully got a task",
            data: result
        })
    } catch (err) {
        res.send({
            status: false,
            message: "There was a server side error while finding a task"
        })
    }
})

// Insert a task
router.post("/", async (req, res) => {
    try {
        // const result = await Task.insertOne(req.body)
        const newTask = new Task(req.body)
        const result = await newTask.save()
        res.send({
            status: true,
            message: "Task added succesfully",
            data: result
        })
    } catch (err) {
        res.send({
            status: false,
            message: "There was a server side problem while adding a task"
        })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);
        const result = await Task.deleteOne({ _id: id })
        res.send({
            status: true,
            message: "Task was deleted succusfully",
            data: result
        })
    } catch (err) {
        res.send({
            status: false,
            message: "There was a server side error while deleting a task"
        })
    }
})

// update a tasks status
router.put("/", async (req, res) => {
    try {
        const id = req.query.id
        const status = req.query.status
        const result = await Task.findByIdAndUpdate({ _id: id }, {
            $set: {
                status: status
            }
        })
        res.send({
            status: true,
            message: "Task updated succesfully",
            data: result
        })
    } catch (err) {
        res.send({
            status: false,
            message: "There was a server side error while updating a tasks status"
        })
    }
})

// edit a task
router.put("/edit/:id", async (req, res) => {
    try {
        const id = req.params.id
        const task = req.body
        const result = await Task.findByIdAndUpdate({ _id: id }, {
            $set: task
        })
        res.send({
            status: true,
            message: "Task was edited succesfully succesfully",
            data: result
        })
    } catch (err) {
        res.send({
            status: false,
            message: "There was a server side error while editing a task"
        })
    }
})

module.exports = router