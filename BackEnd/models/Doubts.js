const mongoose = require("mongoose")

const DoubtSchema = new mongoose.Schema({

    email: {
        type: String,
        require: true
    },
    Title :{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }

})

module.exports=mongoose.model("Doubt",DoubtSchema)