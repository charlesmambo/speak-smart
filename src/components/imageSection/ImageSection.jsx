import React from 'react';
import '../imageSection/ImageSection.css';
import IMG1 from '../../assets/ed8.png';
import IMG2 from '../../assets/ed2.png';
import IMG3 from '../../assets/ed7.png';
import IMG4 from '../../assets/ed4.png';
import IMG5 from '../../assets/ed5.png';
import IMG6 from '../../assets/ed6.png';

const ImageSection = () => {
  return (
    <div className='image-container'>
      <img src={IMG6} alt="" />
      <img src={IMG2} className='small-img' alt="" />
      <img src={IMG3} className='small-img' alt="" />
      <img src={IMG5} className='small-img' alt="" />
      <img src={IMG1} className='small-img' alt="" />
      <img src={IMG4} alt="" />
    </div>
  )
}

export default ImageSection
