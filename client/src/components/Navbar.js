import React from 'react'
import "./Home/navbar_landing.css";
import Icon from "../icons/icon.png"
import Buy from "../icons/Ticket.png"
import Hum from "../icons/hamburger.png"

function Navbar() {
  
  return (
   <div className='header'>
    <section className='navbar'>
      <div className='image-container'>
        <img className='logo' src={Icon} alt='logo' />
      </div>

      <div className='second-container'>
          <ul className='nav-links'>
            <li className='nav-item'><a href='#container'>Events</a></li>
            <li className='nav-item'><a href='#'>Schedule</a></li>
            <li className='nav-item'><a href='#merch'>Merch</a></li>
          </ul>

        <img className='hamburger' src={Hum} alt='menu'/>
        
        <div className='yellow-button'>
           <img src={Buy} alt='buy-ticket'/>
           <a href='#'>BUY NOW</a>

        </div>
        

      </div>
      

      
      </section>
      
    </div>
  )
}

export default Navbar
