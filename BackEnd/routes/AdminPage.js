const express = require("express")
const { SecondAdminPage, ThirdAdminPage, MainAdminPage } = require("../controller/AdminPage")
const router = express.Router()

router.post("/SecondAdminPage", SecondAdminPage)

// Route for user signup
router.post("/ThirdAdminPage", ThirdAdminPage)

// Route for sending OTP to the user's email
router.post("MainAdminPage", MainAdminPage)


module.exports = router