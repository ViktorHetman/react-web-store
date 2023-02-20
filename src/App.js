import { useEffect, useState } from "react"
import Card from "./components/Card/Card"
import Cart from "./components/Cart"
import Header from "./components/Header"


const WEB_URL = 'https://63f3905f864fb1d600195170.mockapi.io/items'

function App() {  
  const [cartOpened, setCartOpened] = useState(false)
  const [cardItems, setCardItems] = useState([])

  useEffect(() => {
    fetch(WEB_URL)
    .then((res) => {
      return res.json()
    })
    .then((json) =>{
      setCardItems(json)
    })
  },[])

  const favoriteToggleHandler = () => {
    console.log('added to marks')
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Cart  cartCloseHandler={()=> setCartOpened(false)}/>}
      <Header cartOpenHandler={() =>  setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40"> 
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
             <img src="/img/search.svg" alt="Search-icon"/>
             <input placeholder="Search..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
        {cardItems.map((arr) => (
          <Card title={arr.title} price={arr.price} imageUrl={arr.imageUrl} favoriteToggleHandler={favoriteToggleHandler}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default App
