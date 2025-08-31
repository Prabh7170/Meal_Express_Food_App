import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order Your Favourite Food from here</h2>
        <p>Choose from a diverse Menu featuring a delectable array of dishes crafted with finest spices and curated with lots of love</p>
        <a href='#explore-menu'>View Menu</a>
      </div>    
    </div>
  )
}

export default Header
