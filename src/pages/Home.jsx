import React from 'react'
import Card from '../components/Card/Card'

function Home({cardItems,searchValue,setSearchValue,favoriteToggleHandler,addToggleHandler}) {
  return (
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
  )
}

export default Home