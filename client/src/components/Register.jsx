import { useNavigate } from "react-router-dom";
import { registerUser } from '../api/api';


const Register = ({user, setUser, isLoggedIn, setIsLoggedIn, username, setUsername, password, setPassword, setToken, }) => {

    const handleRegister = async(event) => {
        event.preventDefault();
        console.log({username, password});
        const newresponse = await registerUser({username, password});
        console.log(newresponse);
    }
        
        return (
            <>
        <div>
            <label>
                <input type='text' placeholder="username" onChange={(event) => setUsername(event.target.value)} required/>
            </label>
            <label>
                <input type='text' placeholder="password"onChange={(event) => setPassword(event.target.value)} required/>
            </label>
            <button type="submit" onClick={handleRegister}>Register</button>
        </div>
        <h1>This is register Page</h1>
        </>
    );
}

export default Register;