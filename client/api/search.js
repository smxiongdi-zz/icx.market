export const searchAPI = () => {
    const baseUrl = "/api/search";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include",
    }).then(res => res.json())
}
