import { Link } from 'react-router-dom';
import './sidebar.css';
import { AiFillHome } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
    return(
        <aside className="sidebar">
            <Link className='link' to='/home'>
                <div className='link-icon-container'>                    
                    <AiFillHome size={'1.5em'} className='link-icon'/>
                    <p className='link-name'>Home</p>
                </div>
            </Link>
           
            <div className='link-section'>
                <Link className='link' to='/search'>
                    <div className='link-icon-container'>                    
                        <FaCompass size={'1.5em'} className='link-icon'/>
                        <p className='link-name'>Discover</p>
                    </div>
                </Link>
            </div>

            <div className='link-section'>
                <Link className='link' to='/library'>
                    <div className='link-icon-container'>                    
                        <IoBookmark size={'1.5em'} className='link-icon'/>
                        <p className='link-name'>Saved</p>
                    </div>
                </Link>
            </div>

            <div className='link-section'>
                <Link className='link' >
                    <div className='link-icon-container'>                    
                        <IoSettings  size={'1.5em'} className='link-icon'/>
                        <p className='link-name'>Settings</p>
                    </div>
                </Link>
            </div>
            
        </aside>
    )
}
export default Sidebar;