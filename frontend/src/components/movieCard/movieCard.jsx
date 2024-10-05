import { Link } from 'react-router-dom';
import './movieCard.css';


const Moviecard = ({poster,id,title}) => {
    return (
        <>
        <Link to={`/movie/${id}`}  className="movie-card"> 
            <div className='movie-card-poster-container'>
                <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/w400${poster}`}/>
            </div>
            <p className="movie-card-title">{title}</p>
        </Link>
        
        </>
        
    )
}
export default Moviecard;