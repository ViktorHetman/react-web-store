import React from 'react'
import {Link} from 'react-router-dom'

function Header({cartOpenHandler}) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
      <div className="d-flex align-center">
        <img width={100} height={100} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">Sneakers Store</h3>
          <p className="opacity-5">The best sneakers</p>
        </div>
      </div>
      </Link>
      <ul className="d-flex">
        <li onClick={cartOpenHandler} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>100$</span>
        </li>
        <li className="align-center">
          <Link to="/favorites">
          <img className="mr-20 cu-p" width={18} height={18} src="/img/favorite-page.svg" alt="favorite-page" />
          </Link>
        </li>
        <li className="align-center">
          <img width={18} height={18} src="/img/user.png" alt="user" />
        </li>
      </ul>
    </header>
  )
}

export default Header
