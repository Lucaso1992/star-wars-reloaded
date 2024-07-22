const Signup = async (email, password) => {

    return (
        await fetch(`https://glorious-waffle-7gv6x7jj9vvhx5rj-3000.app.github.dev/signup`, {method: "POST", headers: {"Content-Type": "application/json"}, 
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