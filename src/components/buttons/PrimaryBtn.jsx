import React from 'react';
import '../buttons/PrimaryBtn.css';

const PrimaryBtn = ({ text = "Click Me", onClick, className = "" }) => {
  return (
    <div className={`primary-btn ${className}`}>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default PrimaryBtn;
