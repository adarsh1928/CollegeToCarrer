const mongoose=require("mongoose");

const fieldSchema = new mongoose.Schema({
    label: String,
    type: {
      type: String,
      enum: ['text', 'checkbox', 'radio', 'dropdown'],
      required: true,
    },
    options: [{
      value: String,
    }],
  });

const FormSubmissonSchema=new mongoose.Schema({

     email:{
        type:String,
        required:true,
     },
     semester:{
        type:Number,
     },
     Form:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Form"
     },
     selectedOptions:[fieldSchema]
})

module.exports=mongoose.model("formSubmisson",FormSubmissonSchema)
