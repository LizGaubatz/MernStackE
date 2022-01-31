const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name must be at least 2 characters!"]
    },
    url: {
        type: String,
        required: [true, "Image is required!"],
        min: [1, "Image must be valid!"]
    },
    chests: {
        type: Number,
        required: [true, "This is required!"],
        min: [0, "Must be positive"],
    },
    phrase: {
        type: String,
        required: [true, "Phrase is required!"],
        min: [2, "Description must be at least 2 characters!"]
    },
    position: {
        type: String,
        required: [true, "Position is required!"],
        minlength: [2, "Pirate must have a position!"]
    }
}, {timestamps: true});

// const Pirate = mongoose.model("Pirate", PirateSchema)
// module.exports = Pirate
module.exports.Pirate = mongoose.model('Pirate', PirateSchema)
