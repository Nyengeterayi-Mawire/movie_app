import { createSlice } from "@reduxjs/toolkit"; 

const initialState = { displayDeleteProfile : false, displaySaved : false, displayUnsaved : false, message:''}; 

export const notificationsSlice = createSlice({
    name : 'notifications',
    initialState,
    reducers : {
        setDisplayDeleteProfile : (state) => {
            state.displayDeleteProfile = !state.displayDeleteProfile;
        },
        setDisplaySaved : (state,action) => {
            state.displaySaved = action.payload.active;
            state.message = action.payload.message;
        },
        setDisplayUnsaved : (state) => {
            state.displayUnsaved = !state.displayUnsaved;
        },
    }
}); 

export const {setDisplayDeleteProfile,setDisplaySaved,setDisplayUnsaved} = notificationsSlice.actions;

export default notificationsSlice.reducer;