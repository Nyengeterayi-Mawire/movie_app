import { useState } from 'react';
import './deleteProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayDeleteProfile } from '../../../features/notifications';
const Deleteprofile = () => {
    const [name,setName] = useState('');
    const dispatch = useDispatch();
    const display = useSelector(state=>state.notifications.displayDeleteProfile);

    const handleConfirm = (e) => {
        e.preventDefault();
        dispatch(setDisplayDeleteProfile());
    }
    return (
        <div className={`delete-profile ${display?'show':'hide'}`}>
            <form className={`delete-profile-form ${display?'show':'hide'}`}>
                <p>Type profile name <b>Nyenge</b> to verify delete</p>
                <input onChange={(e)=>setName(e.target.value)}/>
                <div className="submit-button-container">
                    <button className='submit-button' id='confirm-delete-button' onClick={handleConfirm}>Confirm</button>
                </div>
            </form>
        </div>
    )
}
export default Deleteprofile