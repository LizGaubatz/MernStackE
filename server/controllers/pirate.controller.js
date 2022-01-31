// const { response } = require('express');
// const {Pirate} = require('../models/pirate.model');

// // module.exports.index = (req, res) => { 
// //     res.json({
// //         message: "Hello World"
// //     });
// // }

// module.exports.createPirate = (req, res) => {
//     Pirate.create(req.body)
//         .then(pirate => res.json(pirate))
//         .catch(err=>res.status(400).json(err))
// }

// module.exports.getAllPirates = (req, res) => {
//     Pirate.find()
//     .then(pirates => res.json(pirates))
//     .catch(err => res.status(400).json(err))
// }

// module.exports.getPirate = (req, res) => {
//     Pirate.findOne({_id: req.params.id})
//         .then(pirate => res.json(pirate))
//         .catch(err => res.status(400).json(err))
// }

// module.exports.updatePirate = (req, res) => {
//     Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
//     .then(updatedPirate => res.json(updatedPirate))
//     .catch(err => res.status(400).json(err))
// }

// module.exports.deletePirate = (req, res) => {
//     Pirate.deleteOne({_id: req.params.id})
//         .then(deleteConfrim => res.json(deleteConfrim))
//         .catch(err => response.status(400).json(err))
// }

const {Pirate} = require("../models/pirate.model")


// SHOW ALL
module.exports.allPirates = (req, res) =>{
    Pirate.find()
        .then(jobs => res.json(jobs))
        .catch(err=> res.status(400).json(err))
}

// SHOW ONE
module.exports.onePirate = (req, res) =>{
    Pirate.findOne({_id: req.params.id})
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}

// CREATE
module.exports.addPirate = (req, res) =>{
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err=> res.status(400).json(err))
}

// UPDATE
module.exports.updatePirate = (req, res) =>{
    Pirate.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}


// DELETE
module.exports.deletePirate = (req, res) =>{
    Pirate.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err=> res.status(400).json(err))
}