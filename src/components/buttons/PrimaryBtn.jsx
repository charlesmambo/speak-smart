import React from 'react';
import '../buttons/PrimaryBtn.css';

const PrimaryBtn = ({ text = "Click Me", onClick, className = "" }) => {
  return (
    <button className={`primary-btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryBtn;
