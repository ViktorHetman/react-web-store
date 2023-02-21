import React, { useState } from 'react'
import styles from './Card.module.scss'

function Card({
  title,
  price,
  imageUrl,
  favoriteToggleHandler,
  addToggleHandler,
}) {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const addItemHandler = () => {
    addToggleHandler({title,price,imageUrl})
    setIsAdded(!isAdded)
  }

  const setFavoriteHandler = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={favoriteToggleHandler}>
        <img src={isFavorite ? "img/liked.svg" : "img/unliked.svg"} onClick={setFavoriteHandler} alt="unliked-icon" />
      </div>
      <img width={133} height={122} src={imageUrl} alt="sneakers-1" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} $</b>
        </div>
        <img
          className={styles.plus}
          onClick={addItemHandler}
          src={isAdded ? '/img/selected.svg' : '/img/plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  )
}

export default Card
