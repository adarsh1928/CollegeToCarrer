
const mongoose = require("mongoose");
const User = require("../models/User");
const Courses = require("../models/Courses");

exports.createCourse = async (req, res) => {

    try {
        const { semester, TypeOfCourse, name } = req.body;

        const userid = req.body.id;

        if (!semester || !TypeOfCourse || !name) {
            res.status(400).json({
                success: false,
                message: "All field Required"
            })
        }

        const instructorDetail = await User.findById(userid,
            {
                accountType: "Instructor"
            }
        )
        if (!instructorDetail) {
            return res.status(404).json({
                success: false,
                message: "Instructor Details Not Found",
            });
        }

        const newCourse = new Courses.create({
            courseName: name,
            semester,
            studentsEnrolled,
            TypeOfCourse,
        })

        res.status(200).json({
            success: true,
            data: newCourse,
            message: "Course Created Successfully",
        });
    }
    catch (error) {
        // Handle any errors that occur during the creation of the course
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create course",
            error: error.message,
        });
    }
}
