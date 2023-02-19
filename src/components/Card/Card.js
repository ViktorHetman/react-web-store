import React from 'react'
import styles from './Card.module.scss'

function Card({title, price, imageUrl}) {
  const alertHandler = () => {
    alert(title)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/unliked.svg" alt="unliked-icon" />
      </div>
      <img
        width={133}
        height={122}
        src={imageUrl}
        alt="sneakers-1"
      />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} $</b>
        </div>
        <button className={styles.button} onClick={alertHandler}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  )
}

export default Card
