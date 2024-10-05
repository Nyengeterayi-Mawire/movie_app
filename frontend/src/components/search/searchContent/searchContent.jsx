import { useEffect, useState } from 'react';
import './searchContent.css';
import axios from 'axios'; 
import Moviecard from '../../movieCard/movieCard';
import Genres from '../genre/genres';
import Movietypefilter from '../movieTypeFilter/movieTypeFilter';
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from '../../../features/search';

const api_key = '866ea501939402bc490d181d8516add8';

const Searchcontent = () => {
    const [currentPage,setCurrentPage] = useState(0);
    const [maxPages,setMaxPages] = useState(0);    

    const api_link = useSelector(state=>state.search.api_link);
    const searchResults = useSelector(state=>state.search.results);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get(`${api_link}api_key=${api_key}`).then(res=>{
            dispatch(setResults(res.data.results));            
            setCurrentPage(res.data.page);
            setMaxPages(res.data.total_pages);
        })
    },[api_link]);

    const handleNextPage = () => {
        axios.get(`${api_link}api_key=${api_key}&page=${currentPage+1}`).then(res=>{           
            dispatch(setResults(res.data.results));             
            setCurrentPage(res.data.page);
        })
    };

    const handlePreviousPage = () => {
        axios.get(`${api_link}api_key=${api_key}&page=${currentPage-1}`).then(res=>{
            dispatch(setResults(res.data.results)); 
            console.log(res);
            setCurrentPage(res.data.page);
        })
    }

    return (
        <div className="search-content">
            <div className='filter-container'>
                <Movietypefilter />
                <Genres />
            </div> 
            <div className='search-results-container' >                
                <div className='movie-search-list-container' id='movie-list-container'>
                    {searchResults && searchResults.map(movie=>{
                        return <Moviecard key={movie.id} poster={movie.poster_path} id={movie.id} title={movie.title?movie.title:movie.name } />
                    })}
                    <div className='pages-buttons-container'>
                        <button className='page-button' onClick={handlePreviousPage} style={currentPage<=1?{visibility:'hidden'}:{visibility:'visible'}} > Previous Page</button>
                        <button className='page-button' onClick={handleNextPage} style={currentPage>=maxPages?{visibility:'hidden'}:{visibility:'visible'}}> Next Page</button>
                    </div>
                </div>                
            </div> 
            

        </div>
    )
}
export default Searchcontent;