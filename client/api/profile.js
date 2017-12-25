export const profileAPI = (uid) => {
    const baseUrl = "/api/get_profile";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(uid)
    }).then(res => res.json())
}
