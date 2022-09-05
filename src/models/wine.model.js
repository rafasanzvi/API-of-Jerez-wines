//Other iron mode
// const { Schema, model } = require("mongoose")
const mongoose = require("mongoose")

const wineSchema = mongoose.Schema({
    nameOfWine: {
        type: String,
        required: [true, "You must fill the name of the wine"]
    },
    typeOfWine: {
        type: String,
        enum: ["Fino", "Amontillado", "Oloroso", "Palo Cortado", "Cream", "Moscatel", "Dulce"],
        required: [true, "You must the type of wine"]
    },
    winery: {
        type: String,
        required: [true, "You have to fill the winery that made the wine"]
    },
    typeOfGrape: {
        type: String,
        enum: ["Palomino", "Pedro Ximenez", "Moscatel"],
        required: [true, "You must fill the type of grape that the wine is made"]
    },
    description: {
        type: String,
        required: [true, "You must fill the description of the plant"]
    },
    alcoholStrength: {
        type: Number,
        required: [true, "You must fill the alcoholic strength"]
    },
    winePairing: {
        type: String,
        required: [true, "You must tell about wine pairing"]
    },
    imgURL: {
        type: String
    },
},
    {
        timestamps: true,
    }
);

/* const Wine = model("Wine", wineSchema)
module.exports = Wine */
module.exports = mongoose.model('Wine', wineSchema);



