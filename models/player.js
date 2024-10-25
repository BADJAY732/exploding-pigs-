/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
Desc     : mongoose model for players
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

// Packages
let mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Player schema
module.exports = mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4()
    },
    nickname: {
        type: String,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    avatar: {
        type: String,
        default: "/public/avatars/default.png"
    },
    type: {
        type: String,
        default: "player"
    },
    status: {
        type: String,
        default: "idle"
    },
    connection: {
        type: String,
        default: "online"
    },
    score: {
        type: Number,
        default: 0 // คะแนนเริ่มต้นของผู้เล่น
    }
});
