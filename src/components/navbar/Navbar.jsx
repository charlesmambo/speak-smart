import React from 'react';
import '../navbar/Navbar.css'
import PrimaryBtn from '../buttons/primaryBtn';
import LOGO from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className="logo-container">
            <img src={LOGO} alt="Speak Smart Tutoring logo" />
        </div>
        <div className="nav-item-container">
        <ul className="nav-items">
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">services</a>
          </li>
        </ul>
        <div className="ctc-btn-container">
        <PrimaryBtn 
            text="Contact Us" 
            className="nav-btn"
         />
        </div>
        </div>

    </nav>
  )
}

export default Navbar
