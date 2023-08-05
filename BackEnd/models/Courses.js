const mongoose = require("mongoose");

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
	courseName: { type: String },

    semester:{
        type:Number,
        required:true
    },
	studentsEnrolled: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "user",
		},
	],
    TypeOfCourse: {
        type: String,
        enum: ["OtherDept", "OtherSchool", "NPTEL"],
        required: true,
    },
});

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);