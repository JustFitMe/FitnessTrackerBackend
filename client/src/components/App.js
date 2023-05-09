import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Header, Routines} from './index';


const App = () => {
    // const [routines, setRoutines] = useState([]);
// useEffect(() => {

//     const getRoutines = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/api/routines');
    
//             const data = await response.json();
//             console.log(data);
            
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     getUsers();
// }, [])
return (

    <div>
        <Header />
        <Routes>
            <Route path='/' element={<h1>hello</h1>}></Route>
            <Route path='/routines' element={<h1>This is routines</h1>}></Route>
            <Route path='/my-routines' element={<h1>This is my routines</h1>}></Route>
            <Route path='/activities' element={<h1>This is activities</h1>}></Route>
            <Route path='/routine-activities' element={<h1>This is routine activities</h1>}></Route>
        </Routes>
    </div>

)
}

export default App;