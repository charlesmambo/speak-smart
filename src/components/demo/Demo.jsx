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

const Demo = React.forwardRef((props, ref) => {
  const [step, setStep] = useState("intro");
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showPop, setShowPop] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [showWarningPop, setShowWarningPop] = useState(false);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    console.log("Selected card:", cardId);
  };

   const handleWarningPop = () => {
    setShowWarningPop(true);
    setTimeout(() => setShowWarningPop(false), 3000); // hide after 3s
  };

  const resetDemo = () => {
    setSelectedCard(null);
    setSelectedGrade(null);
    setSelectedSubjects([]);
    setStep("intro");
    setProgress(0);
  };

  const handleNextStep = (nextStep) => {
    setProgress((prev) => Math.min(prev + 30, 100));
    setStep(nextStep);
  };

  const handleDone = () => {
    setShowPop(true);
    setTimeout(() => {
      setShowPop(false);
    }, 3000);
    resetDemo();
  };

  return (
    <div className="demo" id="demo" ref={ref}>
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
                <p className="green">They have individual needs a classroom can’t support</p>
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
              <button
                type="button"
                onClick={() => {
                  if (selectedCard) {
                    setStep("request");
                    setProgress(30);
                  } else {
                      handleWarningPop();
                  }
                }}
              >
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
          onReset={resetDemo}
          selectedGrade={selectedGrade}
          setSelectedGrade={(grade) => {
            setSelectedGrade(grade);
            console.log("Selected grade:", grade);
          }}
        />
      )}

      {step === "rd" && (
        <Rd
          onBack={() => setStep("request")}
          onNext={(subjects) => {
            setSelectedSubjects(subjects);
            console.log("Selected subjects:", subjects);
            setStep("persona");
            setProgress(60);
          }}
          onReset={resetDemo}
        />
      )}

{step === "persona" && (
  <Persona
    onBack={() => setStep("rd")}
    onNext={() => setStep("study")}
    onReset={resetDemo}
    setProgress={() => setProgress(80)} 
    setSelectedPersona={(persona) => {
      console.log("Persona selected in Demo:", persona);
      // save it if you want
    }}
  />
)}



      {step === "study" && (
  <Study
    onBack={() => setStep("persona")}
    onNext={() => setStep("completeForm")} 
    onReset={resetDemo}
    setSelectedStudy={(study) => {
      console.log("Study selected:", study);
    }}
  />
)}


      {step === "completeForm" && (
        <CompleteForm onBack={() => setStep("intro")} onDone={handleDone} />
      )}

      {showPop && <Pop />}
       {showWarningPop && (
        <div className="popup warning-popup">
          Please select an option before continuing.
        </div>
      )}
    </div>
  );
});

export default Demo;
