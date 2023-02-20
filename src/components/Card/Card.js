import React, { useState } from 'react'
import styles from './Card.module.scss'

function Card({title, price, imageUrl, favoriteToggleHandler}) {
 
  const [isAdded, setIsAdded] = useState(false)

  const addItemHandler = () => {
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={favoriteToggleHandler}>
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
          <img className={styles.plus} onClick={addItemHandler} src={isAdded ? "/img/selected.svg" : "/img/plus.svg"} alt="Plus" />
      </div>
    </div>
  )
}

export default Card
