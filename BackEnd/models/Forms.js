const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    fields: [{
        label: String,
        type: {
            type: String,
            enum: ['text', 'checkbox', 'radio', 'dropdown'],
            required: true,
        },
        options: [{
            value: String,
        }],
    }],
    submissions:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"formSubmisson"
    },
    expireAt:{
        type:Date,
        required:true
    }
});


formSchema.pre('save', function (next) {

    const hours = this.expiresHours; 

    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + hours);
  
    this.expireAt = expirationTime;
  
    next();
  });

  const Form = mongoose.model('Form', formSchema);
module.exports = Form;
