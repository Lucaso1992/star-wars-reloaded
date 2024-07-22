import { useEffect, useState } from "react";
import validateToken from "../services/ValidateToken";
import { useNavigate } from "react-router-dom"
import useAppContext from "../store/AppContext";

const Private = () => {

    const navigate = useNavigate();
    const {store, actions} = useAppContext();

    useEffect(() => {
        const checkToken = async () => {
            const isValid = await validateToken();
            if (!isValid) {
                alert("You need to log in!");
                navigate("/login");
            } else {actions.setLoggedIn(true)}
        };

        checkToken();
    }, [])

    useEffect(() => {
        console.log(store.loggedIn)
    }, [store.loggedIn])
    return(
        <>
        {store.loggedIn?<h1>ESTO ES PRIVADO</h1> : <div></div>}
        </>
    )
}

export default Private;