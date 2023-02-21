import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card/Card'
import Cart from './components/Cart'
import Header from './components/Header'

const CARD_ITEMS = 'https://63f3905f864fb1d600195170.mockapi.io/items'
const CART_ITEMS = 'https://63f3905f864fb1d600195170.mockapi.io/cart'

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cardItems, setCardItems] = useState([])

  useEffect(() => {
    axios.get(CARD_ITEMS).then((res) => {
      setCardItems(res.data)
    })
    axios.get(CART_ITEMS).then((res) => {
      setCartItems(res.data)
    })
  }, [])

  const favoriteToggleHandler = () => {
    console.log('added to marks')
  }

  const addToggleHandler = (arr) => {
    axios.post(CART_ITEMS, arr)
    setCartItems(prev =>[...prev, arr])
  }
  
  const removeItemHandler = (id) =>{
    axios.delete(`https://63f3905f864fb1d600195170.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(prev => prev.id !== id))
  }
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart
          cartItems={cartItems}
          cartCloseHandler={() => setCartOpened(false)}
          removeItemHandler={removeItemHandler}
        />
      )}
      <Header cartOpenHandler={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Searched by: "${searchValue}"` : 'All shoes'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search-icon" />
            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {cardItems.filter((item) => item.title.toLowerCase().includes(searchValue)).map((arr) => (
            <Card
              key={arr.id}
              title={arr.title}
              price={arr.price}
              imageUrl={arr.imageUrl}
              favoriteToggleHandler={favoriteToggleHandler}
              addToggleHandler={(arr) => addToggleHandler(arr)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
