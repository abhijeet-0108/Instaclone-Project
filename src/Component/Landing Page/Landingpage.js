import React from 'react'
import { NavLink } from 'react-router-dom'
import Landingimg from "../../images/nature.avif"
import "./Landing-page.css"

const Landingpage = () => {
  return (
    <div className='landing'>
        <div className='landingimg'>
            <img src={Landingimg} alt="Landing"/>
        </div>
        <div className='textnbtn'>
           <div className='txt'>10X Team 04</div> 
           <NavLink to="/post-view" className='navbtn'>
            <div className='btn'>
            <button>Enter</button>
           </div>
           </NavLink>
           
         </div>
        

    </div>
  )
}

export default Landingpage ;