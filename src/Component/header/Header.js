import React from 'react'
import logo from "../../images/Logo.png"
import Icon from "../../images/camera.webp"
import "./Header.css"

function Header  ()  {
  return (
    <div>
    
        <>
        
        <nav className='header'>
            <section className='logo'>
                <img src={logo} alt='logo'/>
            </section>
            <section className='camera-icon'>
                <img src={Icon} alt="icon"/>
            </section>
        </nav>
        </>
    
    </div>
  )
}

export default Header;