import Card from "./components/Card/Card"
import Cart from "./components/Cart"
import Header from "./components/Header"


const arr = [
  {title: 'Nike Blazer Mid Suede', price: 300, imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Nike Air Max 270', price: 200, imageUrl: '/img/sneakers/2.jpg'},
  {title: 'Nike Blazer Mid Suede', price: 150, imageUrl: '/img/sneakers/3.jpg'},
  {title: 'Puma X Aka Boku Future Rider', price: 180, imageUrl: '/img/sneakers/4.jpg'}
]

function App() {  
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40"> 
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
             <img src="/img/search.svg" alt="Search-icon"/>
             <input placeholder="Search..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
        {arr.map((arr) => {
          return <Card title={arr.title} price={arr.price} imageUrl={arr.imageUrl}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default App
