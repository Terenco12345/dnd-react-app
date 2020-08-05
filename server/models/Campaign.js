const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const campaignSchema = new mongoose.Schema({
    dungeonMasterEmail: {
        type: String,
        required: true,
    },
    memberEmails: [{
        type: String
    }],
    characterSheets: [{
        type: ObjectId
    }]
});

module.exports = mongoose.model("campaigns", campaignSchema);