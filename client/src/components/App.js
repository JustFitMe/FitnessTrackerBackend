import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Header} from './index';

const App = () => {
    // const [prop, setProp] = useState({});

return (
    <div>
        <Header />
        <Routes>
            <Route path='/' element={<h1>This is home</h1>}></Route>
            <Route path='/routines' element={<h1>This is routines</h1>}></Route>
            <Route path='/my-routines' element={<h1>This is my routines</h1>}></Route>
            <Route path='/activities' element={<h1>This is activities</h1>}></Route>
            <Route path='/routine-activities' element={<h1>This is routine activities</h1>}></Route>
        </Routes>
    </div>
)
}

export default App;