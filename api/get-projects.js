async function getProjects() {
    const url = `${import.meta.env.VITE_API_URL}/projects`
    console.log(url)

    const response = await fetch(url, { method: "GET"});
    console.log(response)
    if (!response.ok) {
        const fallbackError = "Error fetching projects";
    

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage)
    }
return await response.json();
}

export default getProjects;


// const token = window.localStorage.getItem("token")

// const response = await fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Authentication": `Token ${token}`
//     },
//     body: JSON.stringify({
//         YOUR_DATA_HERE
//     }),
// });