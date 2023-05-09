export const getRoutines = async () => {
    try {
        const response = await fetch('/api/routines');

        const data = await response.json();

        // console.log(data);
        return data;
    } catch (error) {
        console.error(error)
    }
}