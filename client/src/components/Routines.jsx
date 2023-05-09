import React, { useEffect } from 'react';

// As any user on the Routines tab, I want to:

// see a list of all public routines showing:
// The routine name, goal, and creator's username
// A list of activities for the routine, including their name, description, and duration and/or count
// As a registered user on the My Routines tab, I want to:

// be shown a form to create a new routine

// the form should have text fields for name and goal
// for each routine which is owned by me I should

// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine

const Routines = ({publicRoutines}) => {

    console.log(publicRoutines);
    
    
    return (
        <>
        <h2> All Public Routines</h2>
        {publicRoutines.map(routine => {
            return (
                
            <div key={routine.id}>
                <h1>{routine.name}</h1>
                <p>{routine.goal}</p>
            </div>
                
            )
        })}
        </>
    )
    
}

export default Routines;
