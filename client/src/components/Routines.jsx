import React, { useEffect } from 'react';


const Routines = ({routines}) => {

    console.log(routines);
    
    
    return (
        <>
        <h2> All Routines</h2>
        
        
        
        {routines.map(routine => {
            return (
                <>
            <h1>{routine.name}</h1>
            <p>{routine.goal}</p>
            </>
            )
        })}
    
        </>
    )
    
}

export default Routines;
