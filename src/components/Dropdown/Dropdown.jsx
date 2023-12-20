import useAppContext from "../../store/AppContext"

import styles from './Dropdown.module.css'

const Dropdown = () => {
    const { store } = useAppContext();
    return (
        <div className={`${styles.dropdown} dropdown d-flex align-items-center ms-3`}>
            <button className={`${styles.button} btn dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>Favorites</strong>
            </button>
            <ul className={`${styles.ul_div} dropdown-menu dropdown-menu-end`}>
                {store.favorites.map((element, index) => {
                    return (<li key={index} ><div className="dropdown-item p-2" ><strong>{element.name}</strong></div></li>);
                })
                }</ul>
            {store.loggedIn ? <p className={styles.count_div}><strong>{store.count}</strong></p> : null
            }
        </div>
    )
}

export default Dropdown