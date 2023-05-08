import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
return (
    <div>
        <Routes>
            <Route path='/routines' element={<h1>This is routines</h1>}></Route>
        </Routes>
    </div>
)
}

export default App;