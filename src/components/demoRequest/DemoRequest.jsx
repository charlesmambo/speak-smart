import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../demoRequest/DemoRequest.css';

const grades = [
  'Prep', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
  'Grade 11', 'Grade 12'
];

const DemoRequest = ({ onBack, onNext, onReset, selectedGrade, setSelectedGrade }) => {
  return (
    <div className="dmr">
      <div className='rd-wrapper'>
        <div className="demo-request">
          <div className="demo-request-title">
            <div className="demo-request-heading">
              <h2>Requesting a Demo</h2>
              <p>Answer the following questions to reach the right path</p>
            </div>
            <AiOutlineCloseCircle className='close-icon' onClick={onReset} />
          </div>

          <div className="range">
            <div className="range-bar demo-g"></div>
          </div>

          <div className="grades">
            <h3>Which grade is your child currently in?</h3>
            <div className="grades-container">
              {grades.map((grade, index) => (
                <p
                  key={index}
                  className={`grade-item ${selectedGrade === grade ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedGrade(grade); // updates and logs in parent
                  }}
                >
                  {grade}
                </p>
              ))}
            </div>
          </div>

          <div className="demo-request-btns">
            <div className="div-btn" onClick={onBack}>
              Back
            </div>
            <div className="demo-btn demo-request-btn2">
              <button type="button" onClick={onNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoRequest;
