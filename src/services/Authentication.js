const Authentication = async (email, password) => {

    return (
        await fetch (`https://3000-lucaso1992-starwarsapi-s3wq5xjviz0.ws-eu107.gitpod.io/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: email, password: password})
        })
        .then(res => {
            if (!res.ok){
                throw Error();
            } 
            return res.json();
        })
        .then(data => {
            sessionStorage.setItem("token", data.token);
            console.log(data.token)
            return true
        })
        .catch(err => {
            console.log(err)
            return false
        })
    )
}

export default Authentication