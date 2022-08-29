const express = require("express")

const router = express.Router()

//Create user
router.get('/users', (req, res) => {
    res.send("<h1>Create user</h1>")
})


module.exports = router;