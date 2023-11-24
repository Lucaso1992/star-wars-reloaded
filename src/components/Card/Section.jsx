import styles from './Section.module.css';

const Section = ({ children, title }) => {
    // const { store } = useAppContext();

    return (
        <div className='container '>
            {/* <div className='loading-Div'>
            <RingLoader color={"black"} size={200} />
        </div> */}

            <h1 className={`${styles.titles} text-center`}><strong>{title}</strong></h1>
            <div className={styles.cards_container}>
                {children}
            </div>
        </div>
    )
}

export default Section