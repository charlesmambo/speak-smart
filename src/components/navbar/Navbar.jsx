import React, { useState } from 'react';
import '../navbar/Navbar.css'
import PrimaryBtn from '../buttons/PrimaryBtn';
import LOGO from '../../assets/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileOpen(!isMobileOpen);
    };

    
  return (
    <nav>
        <div className="logo-container">
            <img src={LOGO} alt="Speak Smart Tutoring logo" />
        </div>

        <div className="nav-item-container">
            <ul className="nav-items">
            <li><a href="">home</a></li>
            <li><a href="">about</a></li>
            <li><a href="">services</a></li>
            </ul>
            <div className="ctc-btn-container">
            <PrimaryBtn text="Contact Us" className="nav-btn" />
            </div>
        </div>

        <div className="mobile-toggle-btn" onClick={toggleMobileMenu}>
            {isMobileOpen ? (
            <IoMdClose className='nav-icon close-icon' />
            ) : (
            <RxHamburgerMenu className='nav-icon open-nav' />
            )}
        </div>

            {isMobileOpen && (
            <div className="mobile-navbar">
            <ul className="nav-items mobile-items">
                <li><a href="">home</a></li>
                <li><a href="">about</a></li>
                <li><a href="">services</a></li>
            </ul>
            <div className="ctc-btn-container">
                <PrimaryBtn text="Contact Us" className="nav-btn mobile-btn" />
            </div>
            </div>
            )}
    </nav>
  )
}

export default Navbar
