import { useState } from "react"
import { useNavigate } from "react-router-dom"

import useAppContext from "../../store/AppContext"
import Authentication from "../../services/Authentication"
import Signup from "../../services/SignUp"

import styles from "./Login.module.css"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { actions } = useAppContext();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSingUp = async (e) => {
        e.preventDefault();
        try {
            const signedUp = await Signup(email, password);
            if (signedUp) {
                console.log(signedUp)
                navigate('/login');
                setEmail('');
                setPassword('');
                alert("Registro correcto! Por favor, inicia sesion")
            } else {
                alert("Ingresa un usuario y email")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            const authenticated = await Authentication(email, password);

            if (authenticated) {
                navigate('/');
                setEmail('');
                setPassword('');
                actions.setLoggedIn(true);
            } else {
                setEmail('');
                setPassword('');
                alert("Usuario o contraseña inexistenes. Creá tu cuenta");
            }
        } catch (error) {
            console.log('Error en la autenticación:', error);
        }
    }

    return (
        <div className={styles.whole_div}>
            <div className="container w-25">
                <ul className={`nav nav-tabs d-flex justify-content-center ${styles.ul}`} id="myTab" role="tablist">
                    <li className="nav-item my-4" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                            type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><strong>Log In</strong></button>
                    </li>
                    <li className="nav-item my-4" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                            type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><strong>Sign Up</strong></button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <div>
                            <form className={styles.formulary}>
                                <div className="d-flex justify-content-around align-items-center mb-5">
                                    <label className='text-white'>Email:</label>
                                    <input type="email" className={styles.inputss} value={email} onChange={handleEmailChange} required />
                                </div>
                                <div className="d-flex justify-content-around align-items-center mb-5">
                                    <label className='text-light'>Password:</label>
                                    <input type="password" className={styles.inputss} value={password} onChange={handlePasswordChange} required />
                                </div>
                                <button type="button" className={styles.buttonss} onClick={handleLogIn}><strong>Log In</strong></button>
                            </form>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <div>
                            <form className={styles.formulary}>
                                <div className="d-flex justify-content-around align-items-center mb-5">
                                    <label className='text-light'>Email:</label>
                                    <input type="email" className={styles.inputss} value={email} onChange={handleEmailChange} required />
                                </div>
                                <div className="d-flex justify-content-around align-items-center mb-5">
                                    <label className='text-light'>Password:</label>
                                    <input type="password" className={styles.inputss} value={password} onChange={handlePasswordChange} required />
                                </div>
                                    <button type="button" className={`${styles.buttonss} mx-auto`} onClick={handleSingUp}><strong> Sign Up</strong></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;