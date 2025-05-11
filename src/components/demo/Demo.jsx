import React, { useState } from "react";
import "../demo/Demo.css";
import IMG from "../../assets/behi.svg";
import IMG2 from "../../assets/behi2.svg";
import IMG3 from "../../assets/behi3.svg";
import DemoRequest from "../demoRequest/DemoRequest";
import Rd from "../rd/Rd";
import Persona from "../persona/Persona";
import Study from "../study/Study";
import CompleteForm from "../completeForm/CompleteForm";
import Pop from "../popup/Pop";

const Demo = () => {
  const [step, setStep] = useState("intro");
  const [selectedCard, setSelectedCard] = useState(null); 
  const [progress, setProgress] = useState(0); // 0 to 100
  const [showPop, setShowPop] = useState(false);

const handleDone = () => {
  setShowPop(true);
  setTimeout(() => {
    setShowPop(false);
  }, 3000); // 30 seconds
  resetDemo(); // Reset to intro step
};



  const handleCardClick = (cardId) => {
    setSelectedCard(cardId); // Set the clicked card as selected
  };

  const resetDemo = () => {
    setSelectedCard(null);  
    setStep("intro");       
  };
  const handleNextStep = (nextStep) => {
  setProgress((prev) => Math.min(prev + 30, 100)); // prevent going beyond 100
  setStep(nextStep);
};

  
  return (
    <div className="demo">
      {step === "intro" && (
        <div className="first-demo-step">
          <div className="title-container">
            <h2>How can we help your Child?</h2>
            <p>Answer the questions below to request for a demo</p>
          </div>
          <div className="demo-cards">
            <div className="demo-card-wrapper">
              <div
                className={`demo-card border-red ${selectedCard === "falling-behind" ? "selected" : ""}`}
                onClick={() => handleCardClick("falling-behind")}
              >
                <img src={IMG} alt="" />
                <p className="red">I feel like they’re falling behind</p>
              </div>
              <div
                className={`demo-card border-green ${selectedCard === "individual-needs" ? "selected" : ""}`}
                onClick={() => handleCardClick("individual-needs")}
              >
                <img src={IMG2} alt="" />
                <p className="green">
                  They have individual needs a classroom can’t support
                </p>
              </div>
              <div
                className={`demo-card border-blue ${selectedCard === "motivation" ? "selected" : ""}`}
                onClick={() => handleCardClick("motivation")}
              >
                <img src={IMG3} alt="" />
                <p className="blue">They need motivation to improve</p>
              </div>
            </div>
            <div className="demo-btn">
              <button type="button" onClick={() => setStep("request")}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step === "request" && (
      <DemoRequest 
  onBack={() => setStep("intro")} 
  onNext={() => handleNextStep("rd")} 
  progress={progress}
/>
      )}

      {step === "rd" && (
        <Rd 
          onBack={() => setStep("request")} 
          onNext={() => setStep("persona")}
        />
      )}

      {step === "persona" && (
        <Persona
          onBack={() => setStep("rd")}
          onNext={() => setStep("study")}
        />
      )}

      {step === "study" && (
        <Study
          onBack={() => setStep("persona")}
          onNext={() => setStep("completeForm")}
        />
      )}

     {step === "completeForm" && (
  <CompleteForm onBack={() => setStep("intro")} onDone={handleDone} />
)}

     {showPop && <Pop />}
    </div>
  );
};

export default Demo;
