import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Header, Routines, Users, Register, Login, Profile} from './index';
import { getPublicRoutines, getUser } from '../api/api';


const App = () => {
    // const [routines, setRoutines] = useState([]);
    const [publicRoutines, setPublicRoutines] = useState([])
    const [user, setUser] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    useEffect(() => {

        const getData = async () => {
            const fetchedRoutines = await getPublicRoutines();

            // setPublicRoutines(fetchedRoutines.filter(routine => routine.isPublic))

            setPublicRoutines(fetchedRoutines);

        }
        getData();
}, [])
    //    console.log(publicRoutines);

return (

    <div>
        <Header />
        <Routes>
            <Route path='/' element={<Users user={user} isLoggedIn={isLoggedIn} setToken={setToken} setUser={setUser} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}></Route>
            <Route path='/register' element={<Register user={user} isLoggedIn={isLoggedIn} setToken={setToken} setUser={setUser} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}></Route>
            <Route path='/login' element={<Login token={token} user={user} isLoggedIn={isLoggedIn} setToken={setToken} setUser={setUser} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}></Route>
            <Route path='/me' element={<Profile user={user} isLoggedIn={isLoggedIn} setToken={setToken} setUser={setUser} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}></Route>
            <Route path='/routines' element={<Routines publicRoutines={publicRoutines} />}></Route>
            <Route path='/my-routines' element={<h1>This is my routines</h1>}></Route>
            <Route path='/activities' element={<h1>This is activities</h1>}></Route>
            <Route path='/routine-activities' element={<h1>This is routine activities</h1>}></Route>
        </Routes>
    </div>

)
}

export default App;