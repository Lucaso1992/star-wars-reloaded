const Signup = async (email, password) => {
    // const backendUrl = process.env.REACT_APP_BACKEND_URL 

    return (
        await fetch(`https://3000-lucaso1992-starwarsapi-s3wq5xjviz0.ws-eu107.gitpod.io/signup`, {method: "POST", headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({email: email, password: password, is_active: true})})
        .then((res) => {
            if (!res.ok) {
                throw Error();
            }
            return res.json();
        })
        .then(data => data)
        .catch(err => console.log(err)) 
    )
}

export default Signup