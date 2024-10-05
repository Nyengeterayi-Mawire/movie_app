import { useState } from "react";
import { useDispatch } from "react-redux";
import { setApiGenreLink, setApiLink } from "../../../features/search";
import './movieTypeFilter.css';

const Movietypefilter = () => {  
    const dispatch = useDispatch();

    const handleSelect = (e) => {
        if(e.target.value === 'movie'){ 
            dispatch(setApiLink('https://api.themoviedb.org/3/discover/movie?'));
            dispatch(setApiGenreLink('https://api.themoviedb.org/3/genre/movie/list?'));
          
        }else if(e.target.value==='series'){
            dispatch(setApiLink('https://api.themoviedb.org/3/discover/tv?'));
            dispatch(setApiGenreLink('https://api.themoviedb.org/3/genre/tv/list?'));  
        }
    }
    return (
        <select className="filter" id="movieType" onChange={handleSelect}>
            <option value={'movie'}>Movie</option>
            <option value={'series'}>Series</option>
        </select>
    )
}
export default Movietypefilter;