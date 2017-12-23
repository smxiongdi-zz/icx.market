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
