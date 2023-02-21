import React from 'react'

function Cart({cartCloseHandler, removeItemHandler, cartItems=[]}) {
  return (
    <div className="overlay">
        <div className="cartBar">
        <h2 className="d-flex justify-between mb-30">Cart <img onClick={cartCloseHandler} className="removeBtn cu-p" src="/img/remove.svg" alt="remove-button"/></h2>
        
        <div className="items">
            {cartItems.map((arr) =>  
            ( 
            <div className="cartItem d-flex align-center mb-20">
                <div style={{backgroundImage: `url(${arr.imageUrl})`}} className="cartItemImg"></div>
                <div className="mr-20 flex">
                <p className="mb-5">{arr.title}</p>
                <b>{arr.price}$</b>
                </div>
                <img onClick={() => removeItemHandler(arr.id)} className="removeBtn" src="/img/remove.svg" alt="remove-button"/>
            </div>
        ))}
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