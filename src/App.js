import { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './components/Cart'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

const CARD_ITEMS = 'https://63f3905f864fb1d600195170.mockapi.io/items'
const CART_ITEMS = 'https://63f3905f864fb1d600195170.mockapi.io/cart'

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cardItems, setCardItems] = useState([])
  //const [favoriteItems, setFavoriteItems] = useState([])

  useEffect(() => {
    axios.get(CARD_ITEMS).then((res) => {
      setCardItems(res.data)
    })
    axios.get(CART_ITEMS).then((res) => {
      setCartItems(res.data)
    })
  }, [])

  const favoriteToggleHandler = () => {}

  const addToggleHandler = (arr) => {
    axios.post(CART_ITEMS, arr)
    setCartItems((prev) => [...prev, arr])
  }

  const removeItemHandler = (id) => {
    axios.delete(`https://63f3905f864fb1d600195170.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((prev) => prev.id !== id))
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
      <Routes>
        <Route index={true} element={<Home
            cardItems={cardItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            favoriteToggleHandler={favoriteToggleHandler}
            addToggleHandler={addToggleHandler}
          />}>
        </Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
   
  )
}

export default App
