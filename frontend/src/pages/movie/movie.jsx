import { useLocation, useParams } from 'react-router-dom';
import './movie.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Trailer from '../../components/trailer/trailer';
import Navbar from '../../components/navbar/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setSave } from '../../features/user';
import { setDisplaySaved } from '../../features/notifications';
import { FaBookmark } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6";
import Loader from '../../components/loader/loader';
import Error from '../../components/movie/error/error';

const api_key = '866ea501939402bc490d181d8516add8';
const Movie = () => {
    const [movie,setMovie] = useState({});
    const [trailerKey,setTrailerKey] = useState('');
    const [displayTrailer,setDisplayTrailer] = useState(false);
    const [average,setAverage] = useState(0); 
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [saved,setSaved] = useState(false);
 
    const dispacth = useDispatch();    
    const savedList = useSelector(state=>state.users.user.saved); 
    const blur = useSelector(state=>state.users.loggedIn);   
    const {id} = useParams();

    useEffect(()=>{
        if(id){
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`).then(res=>{
                setMovie(res.data);
                setAverage(res.data.vote_average); 
                setSave(savedList.includes(id));
                console.log()
            }).catch(error=>{
                if(error.status===404) {
                    setError(true)
            }}).finally(()=>setLoading(false));


            axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`).then(res=>{                
                const trailers = res.data.results.filter(trailer=>trailer.type==='Trailer' && trailer.name.includes('Trailer'));
                if(trailers.length !== 0){                    
                    setTrailerKey(trailers[0].key);
                }
            })
        }
        
    },[savedList]);

    const handleSave = () => {
        if(savedList.includes(id)){
            dispacth(setSave(id))
            dispacth(setDisplaySaved({active:true,message:'Removed from library'}))
        }else{
            dispacth(setSave(id))
            dispacth(setDisplaySaved({active:true,message:'Added to library'}))

        }
    }
    return (
        <main className={`movie ${blur?'show':'hide'}`}  style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/w500(${movie.poster_path}`})`}}>

            <Navbar/>
            {!loading ? <>
                {!error ? <>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}` } className='movie-backdrop-image'/>
                    
                    <div className='inner-container'>
                        <div className='movie-poster-container'>
                            <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} className='movie-poster'/> 
                        </div>

                        <div className='movie-description-container'>
                            <h2 className='movie-name'>{movie.title}</h2>  
                            <p>Released : {movie.release_date}</p>
                            <p>Duration : {movie.runtime} min</p> 
                            <p>Rating : {average.toFixed(1)}</p>
                            <div className='movie-genre-container'>
                                <p className='genres'> Genres : {movie.genres && movie.genres.map(genre=><p key={genre.id} className='genre'> {genre.name}, </p>)}</p>
                            </div>
                            <p className='movie-overview'>{movie.overview}</p> 
                            <div className='movie-buttons-container'>
                                <button className='movie-button' id='watch-later-button' 
                                style={savedList.includes(id)?{backgroundColor:'yellow',borderColor:'yellow'}:{backgroundColor:'white'}}
                                onClick={handleSave}> <FaBookmark  size={'1.2em'}/> <span>Watch later</span></button>
                                <button className='movie-button' id='watch-trailer-button' 
                                onClick={()=>setDisplayTrailer(true)}> <FaFilm size={'1.2em'}/> <span>Watch trailer</span></button>
                            </div>
                        </div>         

                    </div></> : <Error/>}
            </> : <Loader/>}
            
            <Trailer displayFunction={setDisplayTrailer} display={displayTrailer} id={trailerKey}/> 
            
        </main>
    )
}
export default Movie