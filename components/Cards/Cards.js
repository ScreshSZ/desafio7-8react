import React from 'react'
import styles from '../Cards/cardsContenedor.module.css'


const Cards = ({ image, title, description, id }) => {

    



    return (
        <div className={styles.cardsContenedor}>
            <img src={image}></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <button>Comprar</button>
        </div>
    )
}

export default Cards