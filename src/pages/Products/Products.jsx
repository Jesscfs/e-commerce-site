import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import List from '../../components/List/List';
import "./Products.scss"


const Products = () => {

  const catInt = parseInt(useParams().id);

  const [maxPrice, setMaxPrice ] = useState(0);

  const [sort, setSort] = useState(null);
 

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Hats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id ="2" value={2} />
            <label htmlFor="2">Coats</label>
          </div>
          <div className="inputItem">
          <input type="checkbox" id ="3" value={3} />
            <label htmlFor="3">Stickers</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by prices</h2>
          <div className="inputItem">            
          <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Products (Highest to Lowest)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
            <label htmlFor="desc">Products (Lowest to Hightest)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg" alt="" />
        <List sort={sort} maxPrice={maxPrice} catInt={catInt}/>
      </div>
    </div>
  )
}

export default Products



