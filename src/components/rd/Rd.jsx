import React, { useState } from "react";
import "../rd/Rd.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Rd = ({ onBack, onNext, onReset }) => {
  const subjects = [
    "English",
    "Maths",
    "Life Skills",
    "Art’s & Culture",
    "Economic & Management Sciences",
    "Natural Sciences",
    "Social Sciences",
    "Technology",
    "Life Orientation",
    "Isizulu",
  ];

  const splitSubjects = [subjects.slice(0, 5), subjects.slice(5)];

  const [selectedSubjects, setSelectedSubjects] = useState([]);


let clickCount = 0;
const handleCheckboxChange = (subject) => {
  clickCount++;
  console.log(`Clicked ${clickCount} times`);
  setSelectedSubjects((prev) => {
    const updated = prev.includes(subject)
      ? prev.filter((s) => s !== subject)
      : [...prev, subject];
    console.log("Selected subjects in Rd:", updated);
    return updated;
  });
};


const handleNextClick = () => {
  console.log("Next clicked with subjects:", selectedSubjects);
  onNext(selectedSubjects);
};


  return (
    <div className="rd">
      <div className="rd-wrapper">
        <div className="rd-title-container">
          <div className="rd-title">
            <h2>Requesting a Demo</h2>
            <p>Answer the following questions to reach the right path</p>
          </div>
          <div className="demo-request-icon">
            <AiOutlineCloseCircle className="close-icon" onClick={onReset} />
          </div>
        </div>

        <div className="range">
          <div className="range-bar sub-bar"></div>
        </div>

        <div className="rd-content">
          <h3>Which subject(s) can we help your child with?</h3>
          <div className="checkbox-wrapper">
            {splitSubjects.map((group, index) => (
              <div className="checkbox-container" key={index}>
                {group.map((subject, i) => (
                  <label className="checkbox-label" key={i}>
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(subject)}
                      onChange={() => handleCheckboxChange(subject)}
                    />
                    <span className="checkmark"></span>
                    {subject}
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="rd-btns">
          <div className="div-btn" onClick={onBack}>
            Back
          </div>
          <div className="demo-btn rd-btn2">
            <button type="button" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rd;
