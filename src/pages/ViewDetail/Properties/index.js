import react from 'react';
import styles from "./Properties.module.scss";

const Properties =  ({title,name}) => {
    return (
        <>
        <div className={styles.field}>
            <div className={styles.title}>{title}</div>
            <div className={styles.name}><h4 className={styles.text}>{name}</h4></div>
        </div>
        </>
    )
}

export default Properties;