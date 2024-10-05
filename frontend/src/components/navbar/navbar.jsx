import { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user';
import { setApiLink} from '../../features/search';
import { IoMdArrowRoundBack } from "react-icons/io";

const api_link = 'https://api.themoviedb.org/3/search/movie';
const Navbar = ({display}) => {
    // const [searchInput,setSearchInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (e) =>{
        dispatch(setApiLink(`${api_link}?query=${e.target.value}&`)); 
        
    }

    return(
        <main className="navbar">

            <div className='logo'>
                <p className='logo-text' id='logo-first' style={display?{display:'initial'}:{display:'none'}}>Stream</p>
                <p className='logo-text' id='logo-second' style={display?{visibility:'visible'}:{visibility:'hidden'}}>Wave</p>
                <button className='back-button' style={!display?{visibility:'visible'}:{visibility:'hidden'}}
                onClick={()=>navigate(-1)}><IoMdArrowRoundBack size={'2.5em'}/></button>
            </div>

            <div className='search'>                
                <input className='search-input'
                placeholder='Search movie...'
                style={display?{visibility:'visible'}:{visibility:'hidden'}} 
                onChange={handleSearch}
                />
                {/* <div className='search-output' style={displaySerach?{visibility:'visible'}:{visibility:'hidden'}} >

                </div> */}
            </div>

            <div className='user'>
                <button className='user-button' id='navbar-login-button' onClick={()=>dispatch(setUser(true))}>Log in</button>
                <button className='user-button' id='navbar-signup-button'>Sign up</button>
            </div>
            
        </main>
    )
}
export default Navbar;