const Pirate = require('../models/pirate.model');

module.exports.getAllPirates = (req, res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json(err));
};

module.exports.findPirate = (req, res) => {
    Pirate.findById({_id: req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err));
};

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json(err));
};

module.exports.updatePirate = (req, res) => {
    Pirate.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePirate = (req, res) => {
    Pirate.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
};