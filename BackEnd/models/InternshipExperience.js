const mongoose=require("mongoose")

const internshipExperienceSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    companyName:{
        type:String,
        required:true
    },
    Experience:{
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


module.exports=mongoose.model("internshipExperience",internshipExperienceSchema)