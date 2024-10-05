import { useDispatch } from 'react-redux';
import './form.css';
import { setUser } from '../../../features/user';
import { useState } from 'react';
const Form = () => {
    const [loginData,setLoginData] = useState({email:'',password:''});
    const dispatch = useDispatch();

    const handleInput = (e) => {
        e.prevntDefault;
        setLoginData(state=>state={...state,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(setUser(false));
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className='form-header'>LOGIN</h1> 
            <input className='form-input' id="email" placeholder='Enter your email' onChange={handleInput}/> 
            <input className='form-input' id="password" placeholder='Enter your password' onChange={handleInput}/> 
            <div className='submit-button-container'>
                <button className='login-submit-button' type='submit'>login</button> 
            </div>            
            <span>Don't have an account?Click<p className='form-link'>Signup</p>to create account</span>
        </form>
    )
}
export default Form;