import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InternshipExperience:null,
  PlacementExperience:null
};



const ExperienceSlice = createSlice({
    name: "Experience",
    initialState: initialState,
    reducers: {
        setInternshipExperience(state,value){
            state.InternshipExperience=value.payload
        },
       setPlacementExperience(state,value){
        state.PlacementExperience=value.payload
       }
     
    },
  });
  
  export const { setInternshipExperience, setPlacementExperience } = ExperienceSlice.actions;
  
export default ExperienceSlice.reducer;
