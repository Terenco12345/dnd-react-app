const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const commentSchema = new mongoose.Schema({
    postId: {
        type: ObjectId,
        required: true
    },
    authorEmail: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("comments", commentSchema);