const mongoose = require('mongoose');

// video schema
const VideoSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    song: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    shares: {
        type: Number,
        required: true
    },
    messages: {
        type: Number,
        required: true
    }
})

// collection inside of the db
const Video = module.exports = mongoose.model('Videos', VideoSchema);