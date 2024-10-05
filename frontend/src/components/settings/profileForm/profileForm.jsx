import { useState } from 'react';
import './profileForm.css'
import { useDispatch } from 'react-redux';
import { setDisplayDeleteProfile } from '../../../features/notifications';
const Profileform = () => {
    const [name,setName] = useState('');
    const [editName,setEditName] = useState(false);
    
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(setDisplayDeleteProfile())
    }
    return (
        <form className="profile-form">
            <div className='profile-photo-container'>
                <div className='profile-photo'></div>  
                <div className='edit-flex-container'>
                    <button className='small-button' id='avatar-button'>Change avatar</button> 
                    <button className='small-button' id='delete-button'
                    onClick={handleDelete}>Delete user</button>
                </div>                
            </div>

            <div className='profile-info-container'>
                <div className='edit-container'>
                    <label> Name </label> 
                    {!editName ? (
                        <div className='edit-flex-container'>
                            <p className='edit-input-field'>Nyenge</p> 
                            <button onClick={()=>setEditName(true)}>edit</button>
                        </div>
                    ) : (<input className='edit-input-field' value={name} onChange={(e)=>setName(e.target.value)}/>)}               
                    
                </div>                
            </div> 

            <div className='submit-button-container'>
                <button className='submit-button'>Save</button>
            </div>
        </form>
    )
}
export default Profileform;