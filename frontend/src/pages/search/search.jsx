import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Searchcontent from '../../components/search/searchContent/searchContent';
import Sidebar from '../../components/sidebar/sidebar';
import './search.css';
const Search = () => {
    const [display,setDisplay] = useState(true);
    const [searchResults,setSearchResults] = useState([]);
    
    return (
        <div className="search-page">
            <Navbar display={display} setSearchResults={setSearchResults}/>
            <Sidebar/> 
            <Searchcontent setDisplay={setDisplay} searchResults={searchResults} setSearchResults={setSearchResults}/>
        </div>
    )
}
export default Search;