import React from 'react';
import '../footer/Footer.css';
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import LOGO from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer>
        <div className="top-nav">
        <div className="footer-logo">
              <img src={LOGO} alt="Speak Smart Tutoring logo" />
            <p>A dedicated and passionate tutoring service offering personalized learning experiences</p>
        </div>

        <div className="footer-links-container">
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">What We Ofer</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="">Terms</a>
                </li>
                <li>
                    <a href="">Privacy</a>
                </li>
                <li>
                    <a href="">Cookies</a>
                </li>
            </ul>
        </div>
        </div>

        <div className="copyrights">
            <p>Copyright @speaksmarttutoring 2025. All rights reserved</p>
            <div className="socials">
            <FcGoogle className='footer-icon'/>
            <IoLogoFacebook className='footer-icon fb'/>
            <FaSquareInstagram className='footer-icon insta' />
            </div>
        </div>
    </footer>
  )
}

export default Footer
