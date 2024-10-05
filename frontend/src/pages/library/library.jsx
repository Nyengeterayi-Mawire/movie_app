import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import './library.css';
import Librarycontent from "../../components/library/libraryContent/libraryContent";

const Library = () => {
    const [display,setDisplay] = useState(true);
    return(
        <main className="library">
            <Navbar display={display}/>
            <Sidebar/>
            <Librarycontent setDisplay={setDisplay}/>
        </main>
    )
}
export default Library;