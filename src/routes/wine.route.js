/* const express = require('express')
const router = express.Router() */
const router = require('express').Router()
const Wine = require('../models/wine.model')

router.get("/wines", (req, res) => {

    Wine
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/create", (req, res) => {


})





module.exports = router;