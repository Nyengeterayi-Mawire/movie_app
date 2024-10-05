import { useEffect, useState } from 'react';
import './genres.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setApiLink } from '../../../features/search';

const api_key = '866ea501939402bc490d181d8516add8';

const Genres = () =>{
    const [genreList,setGenreList] = useState([]);

    const genre_api_link = useSelector(state=>state.search.api_genre_link);
    const movie_api_link = useSelector(state=>state.search.api_link);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get(`${genre_api_link}api_key=${api_key}`).then(res=>setGenreList(res.data.genres));
    },[genre_api_link]); 

    const handleSelect = (e) => {    
        dispatch(setApiLink(`${movie_api_link}api_key=${api_key}&with_genres=${e.target.value}`))
    }; 
    

    return(
        <select className="filter" id='genres' onChange={handleSelect}> 
            {genreList && genreList.map(genre=>{
                return <option key={genre.id} value={genre.id}>{genre.name}</option>
            })}            
        </select>
    )
}
export default Genres;