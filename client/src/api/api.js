export const getPublicRoutines = async () => {
    try {
        const response = await fetch('/api/routines');

        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.error(error)
    }
}
//new Routine = {creatorId:creatorId, isPublic:T/F, name:'', goal:''}
export const createRoutine = async (newRoutine, token) => {
    try {
        const response = await fetch('/api/routines', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newRoutine)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error)
    }
}

// export const getUser = async () => {
//     try {
//         const response = await fetch('/api/users');
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }


export const registerUser = async (userObj) => {
    try {
        const response = await fetch('/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        });
        console.log(await response.json());
        
    } catch (error) {
        console.error(error);
    }
}

export const loginUser = async (userObj) => {
    try {
        console.log(userObj);
        const response = await fetch('/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        });
        const data = await response.json();
        // console.log('data in login user function------->',data);

        return data;

    } catch (error) {
        console.error(error);
    }
}

export const getUserRoutines = async () => {
    try {
        // const link = '/:' + username + '/routines'
        const response = await fetch('/:username/routines', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        // console.log('result from getUserRoutines----->', await response.json)
        const data = await response.json();
        // console.log('data------------->',data);
        return data;
    } catch (error) {
        console.error(error);
    }
}