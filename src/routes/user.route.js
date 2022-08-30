const express = require("express")
const userSchema = require("../models/user.model")

const router = express.Router()

//Create user
router.post('/users', (req, res) => {

    const user = userSchema(req.body)

    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;