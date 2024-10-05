import { createSlice } from "@reduxjs/toolkit"; 

const initialState = { user : { saved : []},loggedIn:false}; 

export const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        setUser : (state,action) => {
            // console.log('id change',action.payload);
            // state.user = action.payload;
            state.loggedIn = action.payload;
        },
        setSave : (state,action) => {
            const exists = state.user.saved.includes(action.payload);
            if(exists){
                state.user.saved = state.user.saved.filter(movieId=>movieId !== action.payload)
            }else{
                state.user.saved.push(action.payload);
            }
        }
    }
}); 

export const {setUser,setSave} = usersSlice.actions;

export default usersSlice.reducer;