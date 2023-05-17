const TOKEN_KEY = 'token'
const HISTORY_KEY= 'history'
export const setToken = (data) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}
export const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY))
}
export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}


export const setHistory = (data) => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(data))
}
export const getHistory = () => {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) 
}
export const clearHistory = () => {
    localStorage.removeItem(HISTORY_KEY)
}