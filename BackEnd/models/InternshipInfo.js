const mongoose=require("mongoose")

const internshipInfoSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    Information:{
        type:String,
        required:true
    },
    title:{
           type:String,
           required:true
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
},
{ timestamps: true }

)


module.exports=mongoose.model("internshipInfo",internshipInfoSchema)