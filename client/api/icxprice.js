export const ICXPriceAPI = () => {
    const baseUrl = "https://api.coinmarketcap.com/v1/ticker/icon/";
    return fetch(baseUrl).then(res => res.json())
}
