const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: [true, "Name is required!\nThere are no nameless pirates!"]
    },
    pirateUrl: {
        type: String,
        required: [true, "Image is required!\nWe need to know how the pirate looks!"]
    },
    treasure: {
        type: Number,
        required: [true, "# of treasure is required!\nA valid pirate has treasures!"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch phrase is required!\nA valid pirate has a catch phrase!"]
    },
    crewPosition: {
        type: String,
        required: [true, "Crew position is required!\nNo pirate is a freeloader!"]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Peg leg? or no?"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Eye patch? or no?"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Hook hand? or no?"]
    }
}, {timestamps: true});

const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;