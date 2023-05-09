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