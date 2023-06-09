import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { createRoutine } from '../api/api';

// As any user on the Routines tab, I want to:
// see a list of all public routines showing:
//**************************************** complete ****************************************// The routine name, goal, and creator's username
// A list of activities for the routine, including their name, description, and duration and/or count

// As a registered user on the My Routines tab, I want to:
//**************************************** complete ****************************************// be shown a form to create a new routine
//**************************************** complete ****************************************// the form should have text fields for name and goal

// for each routine which is owned by me I should
//**************************************** complete ****************************************// be able to update the name and goal for the routine
//**************************************** complete ****************************************// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine

const Routines = ({publicRoutines, setPublicRoutines, isLoggedIn, user, token, setGoal, name, goal, setName, isPublic, setIsPublic}) => {
    console.log('props:',{publicRoutines, setPublicRoutines, isLoggedIn, user, token})
  

    const navigate = useNavigate();
    const navigationLink = '/' + user.username + '/routines'

    const handleNavigate = () => {
        navigate(navigationLink);
    }
    // console.log(user);

    const routineToCreate = {
        creatorId: user.id,
        isPublic,
        name,
        goal
    }
    const handleCreateNewRoutine = async(event) => {
        event.preventDefault();
        // console.log('routine to create---->',routineToCreate)
        const newRoutine = await createRoutine(routineToCreate, token);
        // console.log('new routine---->',newRoutine);
        setPublicRoutines([newRoutine,...publicRoutines])
        console.log('public routines from create--------->',{publicRoutines})
        navigate('/me');
    }
    
    // console.log(routineToCreate);
    return (
        <>
        
        <h2> All Public Routines</h2>
        {isLoggedIn &&
        <>
        <button onClick={handleNavigate}>My Routines</button>
        <div id="createNewRoutineForm">
        <form>
            <label>
                <input type="text" placeholder='name' onChange={(event)=>setName(event.target.value)} required/>
            </label>
            <label>
                <input type="text" placeholder='goal' onChange={(event)=>setGoal(event.target.value)} required/>
            </label>            
            <label>Make Routine Public
                <input type="checkbox" onChange={(event)=>setIsPublic(event.target.checked)}/>
            </label>
        <button onClick={handleCreateNewRoutine}>Create New Routine</button>

        </form>
        </div>
        </>
        }
        {/* {console.log(publicRoutines)} */}
        {publicRoutines.length && publicRoutines != undefined && 
        publicRoutines.map(routine => {
            // setSingleRoutine(routine)
            return (
                
            <div key={routine.id}>
                <p>Name: {routine.name}</p>
                <p>Goal: {routine.goal}</p>
                <p>Creator ID: {routine.creatorName}</p>
                <br/>
            </div>
                
            )
        })}
        
        
        </>
    )
    
}

export default Routines;
