import React from 'react';
import '../hero/Hero.css';
import IMG from '../../assets/imag1.png'
import IMG1 from '../../assets/image.png'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="yellow-box"></div>
      <div className="orange-box"></div>
      <div className="hero-img-container first-img">
        <img src={IMG} alt="happy kids in the classroom" />
      </div>
      <div className="grey-box"></div>
      <div className="hero-img-container second-img">
        <img src={IMG1} alt="happy kids in the classroom" />
      </div>
    </div>
  )
}

export default Hero
