const mongoose=require("mongoose")


const researchSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    ResearchDetail: {
        type:String,
        required:true
    }
},
{ timestamps: true }

)

module.exports = mongoose.model("research", researchSchema)