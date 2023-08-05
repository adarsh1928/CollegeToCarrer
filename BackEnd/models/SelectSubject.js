const mongoose=require("mongoose");

const selectSubjectsSchema = new mongoose.Schema({
    email: { type: String },
    subjects: [{ type: String }],
    semester: { type: Number },
    typeOfSubject: { type: String },
    CPI: { type: String }
    // type: { type: String },
    // subjectsForParticularSemester: { type: String }
  });

  module.exports=  mongoose.model("selectSubjects",selectSubjectsSchema);