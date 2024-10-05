import Form from "../form/form";
import './login.css';
import {useSelector} from 'react-redux';
const Login = () => {
    const display = useSelector(state=>state.users.loggedIn);
    return (

        <main className={`login ${display?'show':'hide'}`}>            
            <Form/>            
        </main>

    )
}
export default Login;