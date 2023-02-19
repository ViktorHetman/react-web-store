import React from 'react'

function Cart() {
  return (
    <div style={{display:"none"}} className="overlay">
        <div className="cartBar">
        <h2 className="d-flex justify-between mb-30">Cart <img className="removeBtn cu-p" src="/img/remove.svg" alt="remove-button"/></h2>
        <div className="items">
        <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20 flex">
            <p className="mb-5">Nike Blazer Mid Suede</p>
            <b>200$</b>
            </div>
            <img className="removeBtn" src="/img/remove.svg" alt="remove-button"/>
        </div>
        <div className="cartItem d-flex align-center">
            <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20 flex">
            <p className="mb-5">Nike Blazer Mid Suede</p>
            <b>200$</b>
            </div>
            <img className="removeBtn" src="/img/remove.svg" alt="remove-button"/>
        </div>
        </div>
    <div className="cartTotal">
        <ul>
        <li>
            <span>Total price:</span>
            <div></div>
            <b>400$</b>
        </li>
        <li>
            <span>Discount 5%:</span>
            <div></div>
            <b>20$</b>
        </li>
        </ul>
        <button className="greenButton">Checkout!<img src="/img/arrow.svg" alt="arrow"/></button>
    </div>
    </div>
  </div>
  )
}

export default Cart