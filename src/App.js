function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
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


      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={100} height={100} src="/img/logo.png" alt="logo"/>
          <div>
            <h3 className="text-uppercase">Sneakers Store</h3>
            <p className="opacity-5">The best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
            <span>100$</span>
          </li>
          <li className="align-center">
            <img width={18} height={18} src="/img/user.png" alt="user"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40"> 
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
             <img src="/img/search.svg" alt="Search-icon"/>
             <input placeholder="Search..."/>
          </div>
        </div>
        
        <div className="d-flex">
        <div className="card">
          <div className="favorite">
          <img src="img/liked.svg" alt="unliked-icon"/>
          </div>
          <img width={133} height={122} src="/img/sneakers/1.jpg" alt="sneakers-1"/>
          <h5>Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>200$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={122} src="/img/sneakers/2.jpg" alt="sneakers-1"/>
          <h5>Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>200$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={122} src="/img/sneakers/3.jpg" alt="sneakers-1"/>
          <h5>Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>200$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={122} src="/img/sneakers/4.jpg" alt="sneakers-1"/>
          <h5>Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>200$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
