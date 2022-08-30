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

//Get all users
router.get('/users', (req, res) => {

    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Get a user
router.get('/users/:id', (req, res) => {

    const { id } = req.params

    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


router.put('/users/:id', (req, res) => {

    const { id } = req.params

    const { name, age, email } = req.body

    userSchema
        .findByIdAndUpdate(id, { name, age, email })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Delete 




module.exports = router;