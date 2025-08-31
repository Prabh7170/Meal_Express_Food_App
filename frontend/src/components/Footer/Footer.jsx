import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} className="footer-logo" ></img>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat enim nisi veritatis ex, qui, error est, non consequuntur et odit vero sequi? Necessitatibus soluta a, dolor quia rem quo!</p>
           <div className='footer-social-icons'>
            <img src={assets.facebook_icon}></img>
            <img src={assets.twitter_icon}></img>
            <img src={assets.linkedin_icon}></img>
           </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
           <h2>Get In Touch</h2>
           <ul>
            <li>+91-99999-99999</li>
            <li>prabhjotpablapabla@gmail.com</li>
           </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>
       Copyright 2024 © Prabhjot Singh - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
