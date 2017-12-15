export const registerUserAPI = (userObject) => {
    const baseUrl = "/api/register";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    }).then(res => res.json())
}

export const confirmAccountAPI = (confUrl) => {
    const baseUrl = '/confirm';
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(confUrl)
    }).then(res => res.json())
}
