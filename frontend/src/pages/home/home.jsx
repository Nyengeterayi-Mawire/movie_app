import { useState } from "react";
import Homecontent from "../../components/home/homeContent/homeContent";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import './home.css';
import { useSelector } from "react-redux";

const Home = () => {
    const [display,setDisplay] = useState(true);
    const blur = useSelector(state=>state.users.loggedIn);

    return(
        <main className={`home ${blur?'show':'hide'}`}>
            <Outlet/>
            <Navbar display={display}/>
            <Sidebar/>
            <Homecontent setDisplay={setDisplay}/>
            
        </main>
    )
}
export default Home;