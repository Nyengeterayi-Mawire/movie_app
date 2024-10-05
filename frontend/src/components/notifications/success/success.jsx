import { useDispatch, useSelector } from 'react-redux';
import './success.css';
import { FaCheck } from "react-icons/fa6";
import { useEffect } from 'react';
import { setDisplaySaved } from '../../../features/notifications';

const Success = () => {
    const display = useSelector(state=>state.notifications.displaySaved);
    const message = useSelector(state=>state.notifications.message);
    const dispatch = useDispatch();

    useEffect(()=>{        
        if(display){
            setInterval(()=>dispatch(setDisplaySaved(false)),3000)
        }
    },[display]);

    return (
        <div className={`notification ${display?'show':'hide'}`} id="success-notification">
            <FaCheck size={'2em'} />
            <p className='notification-message'>{message}</p>
        </div>
    )
};
export default Success;