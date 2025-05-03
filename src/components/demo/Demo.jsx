import React from 'react';
import '../demo/Demo.css';
import IMG from '../../assets/behi.svg'
import IMG2 from '../../assets/behi2.svg'
import IMG3 from '../../assets/behi3.svg'

const Demo = () => {
  return (
    <div className='demo'>
      <div className="title-container">
         <h2>How can we help your Child ?</h2>
         <p>Answer the questions below to request for a demo</p>
         </div>
         <div className="demo-cards">
            <div className="demo-card-wrapper">
                <div className="demo-card border-red">
                    <img src={IMG} alt="" />
                    <p className='red'>I feel like they’re falling behind</p>
                </div>
                <div className="demo-card border-green">
                     <img src={IMG2} alt="" />
                    <p className='green'>They have individual needs a classroom can’t support</p>
                </div>
                <div className="demo-card border-blue">
                    <img src={IMG3} alt="" /> 
                    <p className='blue'>They need motivation to improve</p>
                </div>
            </div>
            <div className="demo-btn">
                <button type="submit">next</button>
            </div>
         </div>
    </div>
  )
}

export default Demo
