const Authentication = async (email, password) => {

    return (
        await fetch (`https://organic-yodel-gg4jpxvw9pjhv669-3000.app.github.dev/login`, {
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