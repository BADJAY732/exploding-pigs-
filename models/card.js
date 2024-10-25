/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
Desc     : mongoose model for cards
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

// Packages
let mongoose = require('mongoose');

// Card schema
module.exports = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    image_loc: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    assignment: {
        type: String,
        default: "draw_deck"
    },
    position: {
        type: Number,
        required: true
    }
});
