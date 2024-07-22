import { useContext, createContext, useState, useEffect } from "react";

import useResources from "../hooks/useResources";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const people = useResources('people');
    const vehicles = useResources('vehicles');
    const planets = useResources('planets');
    const [count, setCount] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const logOut = () => {
        sessionStorage.removeItem("token");
        setLoggedIn(false);
    }

    useEffect(() => {
        console.log(loggedIn)
    }, [loggedIn])

    const handleFavorites = ( id, type, name) => {
        setFavorites((prev) => {
            const newFavorite = {
                id,
                type,
                name
            }
            const filter = prev.filter(e => e.id === id) 
            if (filter.length > 0){
                setCount(prev => prev - 1)
                return prev.filter(e => e.id !== id)
            }
            else {
                setCount(prev => prev + 1)
            }
            return ([...prev, newFavorite])
        }
        )
    }

    const store = { people, vehicles, planets, favorites, count, loggedIn }

    const actions = {handleFavorites, setCount, logOut, setLoggedIn}

    return (
        <AppContext.Provider value={{ store, actions }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;

