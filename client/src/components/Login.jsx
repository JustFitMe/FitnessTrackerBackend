import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

const Login = ({user, setUser, isLoggedIn, setIsLoggedIn, username, setUsername, password, setPassword, setToken, token }) => {
    // console.log(user, isLoggedIn)

    const navigate = useNavigate();

    const handleLogin = async(event) => {
        event.preventDefault();
        const errorAlert = document.createElement("p")
        errorAlert.append("Please enter a valid username/password combination")
        if (!username || !password) {
            // window.alert('Please enter a valid username/password combination')
            document.getElementById('loginForm').append(errorAlert)
        }
        const data = await loginUser({username, password});
        console.log('data--->' , data.username);
        
        if (data.token) {
            setUser(data.user);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            setIsLoggedIn(true);
            // console.log(user);
            // console.log(token);
            // console.log(isLoggedIn);
            navigate('/me');
        }
        // setUsername('');
        // setPassword('');
        }
        
        return (
        <>
        <div id="loginForm">
            
            {/* {!username &&
            <p>please enter a valid username</p>
            }
            {!password &&
            <p>please enter a valid password</p>
            } */}
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