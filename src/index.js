const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config() //to customise environment variables in .env

const app = express();
const port = process.env.PORT || 9000 //Server in port 9000
app.listen(port, () => console.log('server listening on port', port)) //Server listening on port = 9000 

//Routes
app.get('/', (req, res) => {
    res.send("<h1>Hiiiiiiiii!!!!<h1>")
})

// Mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Compass"))
    .catch((error) => console.error(error))


