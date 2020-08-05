const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const postSchema = new mongoose.Schema({
    campaignId: {
        type: ObjectId,
        required: true
    },
    authorEmail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("posts", postSchema);