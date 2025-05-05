import React, { useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../demoRequest/DemoRequest.css';

const grades = [
  'Prep', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
  'Grade 11', 'Grade 12'
];

const DemoRequest = ({ onBack, onNext }) => {
  const [selectedGrade, setSelectedGrade] = useState(null);

  return (
    <div className="demo-request">
      <div className="demo-request-title">
        <div className="demo-request-heading">
          <h2>Requesting a Demo</h2>
          <p>Answer the following questions to reach the right path</p>
        </div>
        <AiOutlineCloseCircle className="demo-request-icon" onClick={onBack} />
      </div>

      <div className="grades">
        <h3>Which grade is your child currently in?</h3>
        <div className="grades-container">
          {grades.map((grade, index) => (
            <p
              key={index}
              className={`grade-item ${selectedGrade === grade ? 'selected' : ''}`}
              onClick={() => setSelectedGrade(grade)}
            >
              {grade}
            </p>
          ))}
        </div>
      </div>

      <div className="demo-request-btns">
        <button type="button" className="demo-request-btn" onClick={onBack}>
          Back
        </button>
        <div className="demo-btn demo-request-btn2">
          <button type="button" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};


export default DemoRequest;
