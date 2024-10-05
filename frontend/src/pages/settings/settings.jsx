import { useState } from "react";
import Homecontent from "../../components/home/homeContent/homeContent";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import './settings.css';
import Librarycontent from "../../components/library/libraryContent/libraryContent";
import Settingscontent from "../../components/settings/settingsContent/settingsContent";
import Deleteprofile from "../../components/settings/deleteProfile/deleteProfile";
const Settings = () => {
    const [display,setDisplay] = useState(true);
    return(
        <main className="settings">
            <Navbar display={display}/>
            <Sidebar/>
            <Settingscontent setDisplay={setDisplay}/>
            <Deleteprofile/>
        </main>
    )
}
export default Settings;