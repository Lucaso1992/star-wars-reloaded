export const apiCall = (url ) => {
    return fetch(url) 
    .then(res => res.json())
    .then(res => res)
    .catch(error => console.log(error))
}