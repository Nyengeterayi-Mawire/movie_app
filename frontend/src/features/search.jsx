import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {results:[],api_link:'https://api.themoviedb.org/3/movie/top_rated?',api_genre_link:'https://api.themoviedb.org/3/genre/movie/list?'}; 

export const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers : {
        setResults : (state,action)=>{
            state.results = action.payload;
        },
        setApiLink : (state,action) => {
            state.api_link = action.payload;
        },
        setApiGenreLink : (state,action) => {
            state.api_genre_link = action.payload;
        }
    }
}); 

export const {setResults,setApiGenreLink,setApiLink} = searchSlice.actions;

export default searchSlice.reducer;