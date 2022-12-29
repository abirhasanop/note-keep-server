const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config()
const taskHandler = require("./routeHandler/taskHandler")

const port = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

// noteKeep
// Ffb3mJEyjx9FtQRk
// mongodb+srv://<username>:<password>@cluster0.vn5qrrb.mongodb.net/?retryWrites=true&w=majority
mongoose.set("strictQuery", false)

mongoose.connect(`mongodb+srv://noteKeep:Ffb3mJEyjx9FtQRk@cluster0.vn5qrrb.mongodb.net/noteKeep?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connection Successfull"))
    .catch(err => console.log("Something went wrong, here is the error --->", err))

app.get("/", async (req, res) => {
    res.send("Server is running")
})

app.use("/task", taskHandler)

app.listen(port, () => {
    console.log("Server running on port --->", port);
})