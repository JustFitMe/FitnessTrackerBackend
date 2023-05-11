import { React, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getPublicRoutines, getUserRoutines } from '../api/api';

const MyRoutines = ({isLoggedIn, user, token}) => {
    const {username} = useParams();

    const [userRoutines, setUserRoutines] = useState([]);

    useEffect(()=> {
        const userRoutinesFuction = async (token) => {
            const userRoutines = await getUserRoutines(username, token);
            // console.log(userRoutines);
            setUserRoutines(userRoutines)
        }
        userRoutinesFuction(token);
    }, [])

    console.log('userroutines--->',userRoutines);
    return (
        <>
        
        {!isLoggedIn ?
            <h1>Please login to view your routines</h1>
            : 
            <h1>All of {username}'s Routines</h1>
        }
        
        {isLoggedIn && userRoutines.length && userRoutines != undefined && 
            userRoutines.map(routine => {
                return (
                    
                    <div key={routine.id}>
                    <p>Name: {routine.name}</p>
                    <p>Goal: {routine.goal}</p>
                    <p>Creator ID: {routine.creatorId}</p>
                    <br/>
                </div>
                    
                    )
                })}
                
        {!userRoutines &&
            <p>You have no routines to display yet!</p>
        }
        </>
    )
}

export default MyRoutines