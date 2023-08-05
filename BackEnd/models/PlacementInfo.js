const mongoose = require("mongoose")

const placementInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    Experience: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
},
{ timestamps: true }

)

module.exports = mongoose.model("placementInfo", placementInfoSchema)