// As an unregistered visitor I want to:

// import { useNavigate } from "react-router-dom";

//**************************************** complete ****************************************// see a Sign Up/Sign In form in the header/footer, on a tab (with or without matching route) or in a modal
//**************************************** complete ****************************************// be able to sign up for a new account with valid username/password combination
// see meaningful messages if there are errors during registration, so that I may correct them
//**************************************** complete ****************************************// see tabbed navigation for Routines and Activities (with matching routes)
// As a registered user I want to:

//**************************************** complete ****************************************//be able to log in with my username/password combination
// see meaningful messages if there are errors during login, so that I may correct them
// stay logged in between page visits (for example, if I close my browser, and come back later)
// be able to log out if I am logged in
//**************************************** complete ****************************************//see tabbed navigation for Routines, My Routines (once logged in), and Activities (with matching routes)
// 
const Home = ({user, setUser, isLoggedIn, setIsLoggedIn, username, setUsername, password, setPassword, setToken, }) => {
    // console.log(user, isLoggedIn)
    // const navigate = useNavigate();
    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     navigate('/login');
    //     // const userToAuth={user:{username,password}};
    //     // const data = await loginUser(userToAuth);
    //     // if (data.token) {
    //     //     setToken(data.token);
    //     //     setUser(data);
    //     //     setIsLoggedIn(true);
    //     // }
    // }

    // const handleRegister = async(event) => {
    //     event.preventDefault();
    //     navigate('/register');
    //     // const userToAuth={user:{username,password}};
    //     // const data = createUser(userToAuth);
    //     // if (data.token) {
    //     //     setToken(data.token);
    //     //     setUser(data);
    //     //     setIsLoggedIn(true);
    //     }
        return (
            <>
        <div>
            {/* <label>
                <input type='text' placeholder="username" onChange={(event) => setUsername(event.target.value)} required/>
            </label>
            <label>
                <input type='text' placeholder="password"onChange={(event) => setPassword(event.target.value)} required/>
            </label> */}
            {/* <button type="submit" onClick={handleLogin}>Login</button>
            <button type="submit" onClick={handleRegister}>Register</button> */}
        </div>
        <h1>This is Home Page</h1>
        </>
    );
}


export default Home;