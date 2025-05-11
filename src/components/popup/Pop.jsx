import React from 'react';
import '../popup/Pop.css';
import { FaSquareCheck } from "react-icons/fa6";


const Pop = () => {
  return (
    <div className='pop-up'>
       <FaSquareCheck className='pop-up-icon'/>
       <p>Your request has been submitted successfully.</p>
    </div>
  )
}

export default Pop