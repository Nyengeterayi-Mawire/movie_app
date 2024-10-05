import { createSlice } from "@reduxjs/toolkit"; 

const initialState = { movie : {}}; 

export const moviesSlice = createSlice({
    name : 'movies',
    initialState,
    reducers : {
        setMovie : (state,action) => {
            console.log('id change',action.payload);
            state.movie = action.payload;
        },
    }
}); 

export const {setMovie} = moviesSlice.actions;

export default moviesSlice.reducer;