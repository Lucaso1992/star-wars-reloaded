import Dropdown from '../Dropdown/Dropdown';
import useAppContext from '../../store/AppContext';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css'

const Navbar = () => {
    const ScrollToTopButton = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        };
    const { store, actions } = useAppContext();
    return (
        <nav className={`${styles.navbar} navbar`}>
            <div className={styles.logo_container}>
                <Link to={'/'}><p className={styles.logo} onClick={ScrollToTopButton}><strong>STAR WARS</strong></p></Link>
                <div className={styles.log_fav_container}>
                    {store.loggedIn ? <p onClick={actions.logOut} className={`${styles.logout} mb-0`}>
                        <strong>Logout</strong>
                    </p> : <Link to={'/login'}><p type="button" className={`${styles.loggin} mb-0`}><strong>Login</strong></p></Link>}
                    <Dropdown />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;