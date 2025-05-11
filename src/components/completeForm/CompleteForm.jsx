import React from "react";
import "../completeForm/CompleteForm.css";

const CompleteForm = ({ onBack, onDone }) => {
  const handleDone = (e) => {
    e.preventDefault(); 
    onBack(); 
       if (onDone) onDone();
  };

  return (
    <div className="complete-form">
      <div className="rd">
        <div className="rd-wrapper">
          <div className="rd-title-container">
            <div className="rd-title">
              <h2>Requesting a Demo</h2>
              <p>Answer the following questions to reach the right path</p>
            </div>
          </div>

          <div className="range">
            <div className="range-bar complete-range-bar"></div>
          </div>

          <div className="form-control-wrapper">
            <div className="complete-form-control">
              <p>What’s your name?</p>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="complete-form-control">
              <p>What’s your email address?</p>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div className="complete-form-control">
              <p>What’s your phone number?</p>
              <input type="text" placeholder="+27 624 286 152" />
            </div>
          </div>

          <div className="complete">
            <button type="button" onClick={handleDone}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteForm;
