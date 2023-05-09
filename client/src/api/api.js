export const getPublicRoutines = async () => {
    try {
        const response = await fetch('/api/routines');

        const data = await response.json();

        // console.log(data);
        return data;
    } catch (error) {
        console.error(error)
    }
}

// export const createRoutine = async (newRoutine, token) => {
//     try {
//         const response = await fetch('/api/routines', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//                 //'Authorization': 'Bearer ${token}'
//             },
//             body: JSON.stringify(newRoutine)
//         });
//         const result = await response.json();
//         return result;
//     } catch (error) {
//         console.error(error)
//     }
// }

export const getUser = async () => {
    try {
        const response = await fetch('/api/users');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}


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
        
        // const {success, error, data} = await response.json();
        // if (success) {
        //     const {token, message} = data;
        //     localStorage.setItem('token', token);
        //     console.log(success, error, data);
        //     return {token, message};
        // }
        // if(!success) {
        //     const {name, message} = data;
        //     console.log(success, error, data);
        //     return {name, message};
        // }
        // console.log(success,error,data);
        
    } catch (error) {
        console.error(error);
    }
}