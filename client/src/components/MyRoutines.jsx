import { React } from 'react';

const MyRoutines = ({isLoggedIn}) => {
    return (
        <>
        {isLoggedIn ?
        <h1>Hello these will be all my routines - with the ability to create edit and delete</h1>
        : 
        <h1>Please login to view your routines</h1>}
        </>
    )
}

export default MyRoutines