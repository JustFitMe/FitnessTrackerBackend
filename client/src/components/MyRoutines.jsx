import { React, useEffect } from 'react';
import { getPublicRoutines, getUserRoutines } from '../api/api';

const MyRoutines = ({isLoggedIn, setUserRoutines, userRoutines}) => {
//     useEffect(() => {

//         const getData = async () => {
//             const fetchedRoutines = await getUserRoutines();
//             console.log(fetchedRoutines)
//             // setPublicRoutines(fetchedRoutines.filter(routine => routine.isPublic))

//             setUserRoutines(fetchedRoutines);

//         }
//         getData();
// }, [])
// console.log(userRoutines);
    return (
        <>
        {isLoggedIn ?
        <h1>Hello these will be all my routines - with the ability to create edit and delete</h1>
        : 
        <h1>Please login to view your routines</h1>}
        {!userRoutines &&
            <p>You have no routines to display yet!</p>
        }
        </>
    )
}

export default MyRoutines