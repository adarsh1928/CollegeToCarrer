
const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({

    email: { type: String, unique: true },
    password: String,
    subjectsFromOtherDept: [{ type: String }],
    subjectsFromOtherSchool: [{ type: String }],
    subjectsFromOtherNPTEl: [{ type: String }],
  
  })