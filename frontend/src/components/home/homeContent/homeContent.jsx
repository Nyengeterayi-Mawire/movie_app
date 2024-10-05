import { useEffect, useState } from 'react';
import './homeContent.css';
import axios from 'axios';
import Moviecard from '../../movieCard/movieCard';
import Loader from '../../loader/loader';

const api_key = '866ea501939402bc490d181d8516add8';
const api_links = ['https://api.themoviedb.org/3/movie/popular',
    'https://api.themoviedb.org/3/tv/popular',
    'https://api.themoviedb.org/3/movie/top_rated']

const Homecontent = () => {

    const [popularList,setPopularList] = useState([]);
    const [popularSeries,setPopularSeries] = useState([]);
    const [upcomingMovies,setUpcomingMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{        
        Promise.all(api_links.map(link=>{
            return axios.get(`${link}?api_key=${api_key}`);
        })).then(res=>{            
            setPopularList(res[0].data.results);
            setPopularSeries(res[1].data.results)
            setUpcomingMovies(res[2].data.results)
        }).finally(()=>setInterval(()=>setLoading(false),1000));
        
    },[]);

    return(
        <main className="home-content"> 
            {!loading ? <>
            <div className='movie-section'>                
                <h2>Popular Movies</h2>
                <div className='movie-list-container'>
                    {popularList && popularList.map(movie=>{
                        return <Moviecard key={movie.id} poster={movie.poster_path} title={movie.title} id={movie.id} />
                    })}
                </div>
            </div>

            <div className='movie-section'>
                <h2>Popular Series</h2>
                <div className='movie-list-container'>
                    {popularSeries && popularSeries.map(movie=>{
                        return <Moviecard key={movie.id} poster={movie.poster_path} title={movie.name} id={movie.id}/>
                    })}
                </div>
            </div>

            <div className='movie-section'>
                <h2>Upcoming</h2>
                <div className='movie-list-container'>
                    {upcomingMovies && upcomingMovies.map(movie=>{
                        return <Moviecard key={movie.id} poster={movie.poster_path} title={movie.title}/>
                    })}
                </div>
            </div>
            </> : <Loader/>}
        </main>
    )
}
export default Homecontent;