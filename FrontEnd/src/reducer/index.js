import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slice/authSlice"
import profileReducer from "../slice/profileSlice";
import ExperienceReducer from "../slice/Experiences"



const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    Experience:ExperienceReducer
})

export default rootReducer