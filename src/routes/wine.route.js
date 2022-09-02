/* const express = require('express')
const router = express.Router() */
const router = require("express").Router()
/* const Wine = require('../models/wine.model') */
const wineSchema = require("../models/wine.model")

router.post('/wines', (req, res) => {

    /* const { nameOfWine, typeOfWine, winery, typeOfGrape, description, alcoholStrength, imgURL } = req.body */
    const wine = wineSchema(req.body)

    wine
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

router.get('/wines', (req, res) => {

    wineSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});







module.exports = router;