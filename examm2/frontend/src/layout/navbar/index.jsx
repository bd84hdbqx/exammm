import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
import "../../style/reset.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import img from "../../assets/slider.jpg"

function Navbar() {
  return (
    <>
    <header>
        <img src={img} alt="" style={{width:"100%"}}/>

    <div className="navbar">
    <div className="right">
        <h3>Pulse</h3>
       <span className='point'></span>
        
    </div>
                <div className="center">
                <ul>
        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link' to="/wishlist">wishlist</Link></li>
        <li><Link className='link' to="/addFoods">addFoods</Link></li>
    </ul>
                </div>
                <div className="left">
                    <span id="reserv">Reservations</span>
                    <FontAwesomeIcon icon={faPhone} className='phone' />
                    <span> 652-345 3222 11</span>

                </div>
    
    </div>
    </header>

    
    </>
  )
}

export default Navbar