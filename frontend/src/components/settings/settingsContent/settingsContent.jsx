import Optionswidget from '../optionsWidget/optionsWidget';
import Profileform from '../profileForm/profileForm';
import './settingsContent.css';
const Settingscontent = () => {
    return(
        <div className="settings-content">
            <h2>Settings</h2> 
            <Optionswidget/> 
            <Profileform/>
        </div>
    )
    
}
export default Settingscontent;