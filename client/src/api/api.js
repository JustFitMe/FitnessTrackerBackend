export const getRoutines = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/routines');

        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(error)
    }
}
