export const loginUserAPI = (userObject) => {
    const baseUrl = "/api/login";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(userObject)
    }).then(res => res.json())
}

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
    const baseUrl = "/confirm";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(confUrl)
    }).then(res => res.json())
}

export const userSessionAPI = () => {
    const baseUrl = "/api/session";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    }).then(res => res.json())
}

export const logoutUserAPI = () => {
    const baseUrl = "/api/logout";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    }).then(res => res.json())
}

export const siteVerifyInfoAPI = (info) => {
    const baseUrl = "/api/siteverify";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(info)
    }).then(res => res.json())
}
