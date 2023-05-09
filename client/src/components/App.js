import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Header, Routines} from './index';
import { getRoutines } from '../api/api';


const App = () => {
    const [routines, setRoutines] = useState([]);
    useEffect(() => {

        const getData = async () => {
            const fetchedRoutines = await getRoutines();
            setRoutines(fetchedRoutines);
        }
        getData();
}, [])
       console.log(routines);
return (

    <div>
        <Header />
        <Routes>
            <Route path='/' element={<Routines routines={routines} setRoutines={setRoutines}/>}></Route>
            <Route path='/routines' element={<h1>This is routines</h1>}></Route>
            <Route path='/my-routines' element={<h1>This is my routines</h1>}></Route>
            <Route path='/activities' element={<h1>This is activities</h1>}></Route>
            <Route path='/routine-activities' element={<h1>This is routine activities</h1>}></Route>
        </Routes>
    </div>

)
}

export default App;