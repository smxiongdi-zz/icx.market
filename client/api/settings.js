export const myProfileAPI = () => {
    const baseUrl = "/api/my_profile";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify()
    }).then(res => res.json())
}

export const editProfileAPI = (editedProfile) => {
    const baseUrl = "/api/edit_profile";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(editedProfile)
    }).then(res => res.json())
}

export const themeSettingsAPI = (theme) => {
    const baseUrl = "/api/theme";
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(theme)
    }).then(res => res.json())
}
