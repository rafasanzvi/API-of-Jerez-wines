const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config() //to customise environment variables in .env
const userRoutes = require('./routes/user.route')
const wineRoutes = require('./routes/wine.route')

const app = express();
const port = process.env.PORT || 9000 //Server in port 9000


// middleware
app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', wineRoutes)

//Routes
app.get('/', (req, res) => {
    res.send("<h1>Hiiiiiiiii!!!!</h1>")
})

// Mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Compass"))
    .catch((error) => console.error(error))

//Server listening    
app.listen(port, () => console.log('server listening on port', port)) //Server listening on port = 9000 
