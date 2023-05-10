import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

//for some reason you have to click login twice in order to setUser, setToken, setIsLoggedIn...
//which is bad because then if you navigate to /me, you're not logged in
const Login = ({user, setUser, isLoggedIn, setIsLoggedIn, username, setUsername, password, setPassword, setToken, token }) => {
    // console.log(user, isLoggedIn)

    const navigate = useNavigate();

    const handleLogin = async(event) => {
        event.preventDefault();
        // console.log({username, password});
        const data = await loginUser({username, password});
        console.log('data--->' , data);
        console.log('data.token--->' , data.token);
        
        if (data.token) {
            setUser(data.user);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            setIsLoggedIn(true);
        }
        console.log(user);
        console.log(token);
        console.log(isLoggedIn);

        // setUsername('');
        // setPassword('');
        navigate('/me');
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
            <button type="submit" onClick={handleLogin}>Login</button>
        </div>
        <h1>This is Login Page</h1>
        </>
    );
}


export default Login;