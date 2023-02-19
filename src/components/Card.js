import React from 'react'

function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="img/unliked.svg" alt="unliked-icon" />
      </div>
      <img
        width={133}
        height={122}
        src="/img/sneakers/1.jpg"
        alt="sneakers-1"
      />
      <h5>Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>200$</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  )
}

export default Card
