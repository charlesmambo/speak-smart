import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../demoRequest/DemoRequest.css';

const DemoRequest = ({ onBack }) => {
  return (
    <div className='demo-request'>
      <div className="demo-request-title">
        <div className="demo-request-heading">
          <h2>Requesting a Demo</h2>
          <p>Answer the following questions to reach the right path</p>
        </div>
        <div className="demo-request-icon">
         <AiOutlineCloseCircle className='close-icon' onClick={onBack}/>
        </div>
      </div>
      <div className="grades">
        <h3>Which grade is your child currently in ?</h3>
        <div className="grades-container">
            <p>prep</p>
            <p>Grade 1</p>
            <p>Grade 2</p>
            <p>Grade 3</p>
            <p>Grade 4</p>
            <p>Grade 5</p>
            <p>Grade 6</p>
            <p>Grade 7</p>
            <p>Grade 8</p>
            <p>Grade 9</p>
            <p>Grade 10</p>
            <p>Grade 11</p>
            <p>Grade 12</p>
        </div>
      </div>
      <div className="demo-request-btns">
        <button className="demo-request-btn" type="button" onClick={onBack}>back</button>
        <div className="demo-btn demo-request-btn2">
                <button type="submit">next</button>
            </div>
      </div>
    </div>
  )
}

export default DemoRequest
