/* const express = require('express')
const router = express.Router() */
const router = require("express").Router()
/* const Wine = require('../models/wine.model') */
const wineSchema = require("../models/wine.model")

//Create wine
router.post('/wines', (req, res) => {

    /* const { nameOfWine, typeOfWine, winery, typeOfGrape, description, alcoholStrength, imgURL } = req.body */
    const wine = wineSchema(req.body)

    wine
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

//Get all wines from the list
router.get('/wines', (req, res) => {

    wineSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
});

//Get a wine 
router.get('/wines/:id', (req, res) => {

    const { id } = req.params

    wineSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
})

//Edit a wine
router.put('/wines/:id', (req, res) => {

    const { id } = req.params

    const { nameOfWine, typeOfWine, winery, typeOfGrape, description, alcoholStrength, imgURL } = req.body

    wineSchema
        .findByIdAndUpdate(id, { nameOfWine, typeOfWine, winery, typeOfGrape, description, alcoholStrength, imgURL })
        .then(data => res.json(data))
        .catch(error => res.json({ message: error }));
})









module.exports = router;