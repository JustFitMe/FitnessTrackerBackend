import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

const Login = ({user, setUser, isLoggedIn, setIsLoggedIn, username, setUsername, password, setPassword, setToken, }) => {
    // console.log(user, isLoggedIn)

    const handleLogin = async(event) => {
        event.preventDefault();
        console.log({username, password});
        const newresponse = await loginUser({username, password});
        console.log(newresponse);
        // const userToAuth={user:{username,password}};
        // const data = createUser(userToAuth);
        // if (data.token) {
        //     setToken(data.token);
        //     setUser(data);
        //     setIsLoggedIn(true);
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