import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAppContext from '../../store/AppContext';

import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from "react-icons/ai";
import styles from './Card.module.css';

const Card = ({ type, id, name, children }) => {
    const { actions, store } = useAppContext();
    const location = useLocation();
    const isDetailPage = location.pathname.startsWith('/detail');
    const navigate = useNavigate();

    const handleLearnMore = () =>{
        if(store.loggedIn){
            navigate(`/detail/${type}/${id}`)
        } else {
            alert("Tienes que loggearte para ver este contenido")
        }
    }

    return (
        
        <div className={`${styles.cards} card`} style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg `} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title"><strong>{name}</strong></h5>
                {children}
                <div className={`$ d-flex justify-content-between align-items-center`}>
                    {isDetailPage ? (
                        <Link to={'/'} className={`${styles.back_button} btn btn-primary`}>Go Back </Link>) :
                        (<button  className={`${styles.learn_button} btn btn-primary`} onClick={() => handleLearnMore()}>
                            Learn more</button>)}
                    {store.favorites.find((favorite) => favorite.id === id) ?
                        <AiFillHeart className={styles.icons} onClick={() => actions.handleFavorites(id, type, name)} /> :
                        <AiOutlineHeart className={styles.icons} onClick={() => actions.handleFavorites(id, type, name)} />}
                </div>
            </div>
        </div>
    )
}

export default Card;