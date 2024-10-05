import { useSelector } from 'react-redux';
import './libraryContent.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Moviecard from '../../movieCard/movieCard';

const api_key = '866ea501939402bc490d181d8516add8';

const Librarycontent = () => {
    const [movies,setMovies] = useState([]);
    const saved = useSelector(state=>state.users.user.saved);
    useEffect(()=>{
        if(saved.length !== 0) {
            Promise.all(saved.map(movieID=>axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_key}`))).then(res=>{
                console.log(res);
                setMovies(res);
            });
        }               
    },[saved])
    return (
        <div className="library-content">
            <h2>Library</h2>
            <div className='library-list-container' id='movie-list-container'>
                {movies && movies.map(movie=>{
                    return <Moviecard key={movie.data.id}
                    poster={movie.data.poster_path} 
                    title={movie.data.title}
                    id={movie.data.id}
                    />
                })}
            </div>
        </div>
    )
};

export default Librarycontent;