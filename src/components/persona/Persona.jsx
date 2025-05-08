import React, { useState } from 'react';
import '../persona/Persona.css';
import IMG from "../../assets/behi4.svg";
import IMG2 from "../../assets/behi5.svg";
import IMG3 from "../../assets/behi6.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Persona = ({ onBack, onNext }) => {
    const [selected, setSelected] = useState("");
  
    const options = [
      { label: "Shy", img: IMG, color: "red" },
      { label: "Introvert", img: IMG2, color: "green" },
      { label: "Somewhere in between", img: IMG3, color: "blue" }
    ];
  
    return (
      <div className="dmr">
    <div className='rd-wrapper persona-container'>
      <div className='persona'>
       
              <div className="demo-request-title persona-rq-title">
                <div className="demo-request-heading">
                <h2>Personality</h2>
                </div>
                  <AiOutlineCloseCircle className='close-icon' onClick={onBack} />
              </div>
        <div className="range">
          <div className="range-bar pers-bar"></div>
        </div>
        <div className="demo-cards">
          <div className="demo-card-wrapper">
            {options.map(({ label, img, color }) => (
              <div
                key={label}
                className={`demo-card border-${color} ${selected === label ? "selected" : ""}`}
                onClick={() => setSelected(label)}
              >
                <img src={img} alt={label} />
                <p className={color}>{label}</p>
              </div>
            ))}
          </div>
  
          <div className="demo-request-btns">
          <div className="div-btn" onClick={onBack}>
            Back
            </div>
            <div className="demo-btn demo-request-btn2">
              <button
                type="button"
                disabled={!selected}
                onClick={onNext}
              >
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
  
export default Persona;
