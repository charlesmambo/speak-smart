import React, { useState } from 'react';
import '../study/Study.css';
import IMG from "../../assets/behi7.svg";
import IMG2 from "../../assets/behi8.svg";
import IMG3 from "../../assets/behi9.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Study = ({ onBack, onNext, onReset, setSelectedStudy }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    if (setSelectedStudy) {
      setSelectedStudy(cardId);  // Pass selected card up to parent
    }
  };

  const handleNext = () => {
    if (setSelectedStudy && selectedCard) {
      setSelectedStudy(selectedCard);  // Confirm selection on Next
    }
    onNext();
  };

  return (
    <div className="dmr">
      <div className='rd-wrapper persona-container'>
        <div className='study'>

          <div className="rd-title-container">
            <div className="rd-title">
              <h2>Study Focus</h2>
            </div>
            <div className="demo-request-icon">
              <AiOutlineCloseCircle className='close-icon' onClick={onReset} />
            </div>
          </div>

          <div className="range">
            <div className="range-bar stud-bar"></div>
          </div>

          <div className="demo-cards">
            <div className="demo-card-wrapper">
              <div
                className={`demo-card persona-card border-red ${selectedCard === "easily-distracted" ? "selected" : ""}`}
                onClick={() => handleCardClick("easily-distracted")}
              >
                <img src={IMG} alt="" />
                <p className="red">Easily Distracted</p>
              </div>
              <div
                className={`demo-card persona-card border-green ${selectedCard === "most-attentive" ? "selected" : ""}`}
                onClick={() => handleCardClick("most-attentive")}
              >
                <img src={IMG2} alt="" />
                <p className="green">Most Attentive</p>
              </div>
              <div
                className={`demo-card persona-card border-blue ${selectedCard === "highly-focused" ? "selected" : ""}`}
                onClick={() => handleCardClick("highly-focused")}
              >
                <img src={IMG3} alt="" />
                <p className="blue">Highly Focused</p>
              </div>
            </div>

            <div className="demo-request-btns">
              <div className="div-btn" onClick={onBack}>
                Back
              </div>
              <div className="demo-btn demo-request-btn2">
                <button type="button" disabled={!selectedCard} onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Study;
