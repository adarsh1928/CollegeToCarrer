// Import the Mongoose library
const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the email field with type String, required, and trimmed
		email: {
			type: String,
			required: true,
			trim: true,
		},

		// Define the password field with type String and required
		password: {
			type: String,
			required: true,
		},
		// Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
		accountType: {
			type: String,
			enum: ["Admin", "Student", "Instructor"],
			required: true,
		},
	
		token: {
			type: String,
		},
		resetPasswordExpires: {
			type: Date,
		},
		image: {
			type: String,
			required: true,
		},
		internshipExperiences:[
			{
			   type:mongoose.Schema.Types.ObjectId,
			   ref:"internshipExperience"
			}
		],
		internshipInformations:[
			{
			   type:mongoose.Schema.Types.ObjectId,
			   ref:"internshipInfo"
			}
		],
		placementInformations:[
			{
			   type:mongoose.Schema.Types.ObjectId,
			   ref:"placementInfo"
			}
		],
		placementExperiences:[
			{
			   type:mongoose.Schema.Types.ObjectId,
			   ref:"placementExperience"
			}
		],
		queries:[
			{
			   type:mongoose.Schema.Types.ObjectId,
			   ref:"Doubt"
			}
		]

		// Add timestamps for when the document is created and last modified
	},
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema);