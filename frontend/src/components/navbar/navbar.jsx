import React, { useContext, useState } from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {
  const [menu , setMenu] = useState("menu");
  const {getTotalAmount , token , setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logOut = ()=>{
   localStorage.removeItem(token);
   setToken("");
   navigate("/"); 
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="no img"className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
        <a href='#explore-menu'onClick={()=>setMenu("menu")} className={menu === "menu"? "active":""}>Menu</a>
        <a href='#app-download'onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile-App</a>
        <a href='#footer'onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
      <a href='#explore-menu'><img  src={assets.search_icon} alt='np-img'/></a>
        <div className='navbar-search-icon'>
         <Link to='/cart'><img src={assets.basket_icon} alt='no-img'></img></Link>
          <div className={getTotalAmount()>0?"dot":""}></div>
        </div>
        {!token?<button onClick={()=>{setShowLogin(true)}}>Sign In</button>:<div className='navbar-profile'>
          <img src={assets.profile_icon} alt='//'></img>
          <ul className='nav-profile-dropdown'>
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt='//'/><p>Orders</p></li>
            <hr/>
            <li  onClick={logOut}><img src={assets.logout_icon} alt='//'/><p>Logout</p></li>
          </ul>
          </div>      
      }
        
      </div>
    </div>
  )
}

export default Navbar
