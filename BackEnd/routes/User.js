const express = require("express")
const { signup, login, sendotp} = require("../controller/Auth")
const { createCourse } = require("../controller/Courses")
const { createForms, fillForms, getFormDetails } = require("../controller/Forms")
const { getAllInternshipsExp, getInternshipsInfo, addInternshipExperience, addInternshipInformation, getMyInternshipExperience, getMyInternshipInformation, editMyInternshipExperience, deleteMyInternshipExperience } = require("../controller/Internships")
const { getAllPlacementsExp, getPlacementsInfo } = require("../controller/Placement")
const { createDoubt, getMyQueries, getqueriesInfo } = require("../controller/Doubts")
const { resetPasswordToken, resetPassword } = require("../controller/ResetPassword")
const { createContactUs } = require("../controller/ContactUs")
const { getAllResearch, getMyResearchDetail, createResearchDetail } = require("../controller/Research")

const router = express.Router()

router.post("/signup", signup)

// Route for user Register
router.post("/login", login)
router.post("/sendotp",sendotp)

router.post("/createCourse",createCourse)

router.post("/createForms",createForms)
router.post("/fillForms",fillForms)
router.post("/forms",getFormDetails)

router.post("/internship/experience",getAllInternshipsExp)
router.post("/internship/information",getInternshipsInfo)

router.post("/internship/myExperience",getMyInternshipExperience)
router.post("/internship/myinformation",getMyInternshipInformation)
router.post("/internship/editMyExperience",editMyInternshipExperience)

router.post("/contactUs",createContactUs)
router.post("/internship/deleteMyExperience",deleteMyInternshipExperience)


router.post("/reset-password-token",resetPasswordToken)
router.post("/reset-password",resetPassword)


router.post("/placement/experience",getAllPlacementsExp)
router.post("/placement/information",getPlacementsInfo)

router.post("/internship/addExperience",addInternshipExperience)
router.post("/internship/addInformation",addInternshipInformation)

router.post("/getAllResearch",getAllResearch);
router.post("/myResearchDetail",getMyResearchDetail)
router.post("/createResearch",createResearchDetail)

router.post("/myQueries",getMyQueries)
router.post("/getAllQueries",getqueriesInfo)

router.post("/AskToProfessors",createDoubt)


module.exports = router

