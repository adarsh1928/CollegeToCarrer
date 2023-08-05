
const BASE_URL = "http://localhost:4000/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  GET_INTERNSHIP_EXP:BASE_URL+"/auth/internship/experience",
  GET_INTERNSHIP_INFO:BASE_URL+"/auth/internship/information",
  ADD_INTERNSHIP_EXP:BASE_URL+"/auth/internship/addExperience",
  ADD_INTERNSHIP_INFO:BASE_URL+"/auth/internship/addInformation",
  GET_FORMS_DETAIL:BASE_URL+"/auth/forms",
  FILL_FORM:BASE_URL+"/auth/fillForms",
  ADD_QUERY:BASE_URL+"/auth/AskToProfessors",
  GET_MY_INTERNSHIP_EXPERIENCE:BASE_URL+"/auth/internship/myExperience",
  GET_MY_INTERNSHIP_INFORMATION:BASE_URL+"/auth/internship/myinformation",
  EDIT_INTERNSHIP_EXPERIENCE:BASE_URL+"/auth/internship/editMyExperience",
  DELETE_INTERNSHIP_EXPEREIENCE:BASE_URL+"/auth/internship/deleteMyExperience",
  CONTACT_US_API: BASE_URL + "/auth/contactUs",
  GET_MY_QUERIES:BASE_URL+"/auth/myQueries",
  GET_ALL_QUERIES:BASE_URL+"/auth/getAllQueries",
  GET_ALL_RESEARCH:BASE_URL+"/auth/getAllResearch",
  GET_MY_RESEARCH:BASE_URL+"/auth/myResearchDetail",
  CREATE_RESEARCH:BASE_URL+"/auth/createResearch"
}


// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
}


// COURSE ENDPOINTS


// CONTACT-US API


// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
