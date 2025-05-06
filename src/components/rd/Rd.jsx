import React from 'react';
import '../rd/Rd.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Rd = ({ onBack, onNext  }) => {
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
    "Isizulu"
  ];

  const splitSubjects = [subjects.slice(0, 5), subjects.slice(5)];

  return (
    <div className='rd'>
      <div className='rd-wrapper'>
        <div className="rd-title-container">
          <div className="rd-title">
            <h2>Requesting a Demo</h2>
            <p>Answer the following questions to reach the right path</p>
          </div>
          <div className="demo-request-icon">
          <AiOutlineCloseCircle className='close-icon' onClick={onBack} />
          </div>
        </div>

        <div className="range">
          <div className="range-bar"></div>
        </div>

        <div className="rd-content">
          <h3>Which subject(s) can we help your child with?</h3>
          <div className="checkbox-wrapper">
            {splitSubjects.map((group, index) => (
              <div className="checkbox-container" key={index}>
                {group.map((subject, i) => (
                  <label className="checkbox-label" key={i}>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    {subject}
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="rd-btns">
          <button className="rd-btn" type="button" onClick={onBack}>back</button>
          <div className="demo-btn rd-btn2">
  <button type="submit" onClick={onNext}>next</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default Rd;
