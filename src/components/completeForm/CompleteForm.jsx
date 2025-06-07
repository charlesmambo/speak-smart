import React, { useState } from "react";
import "../completeForm/CompleteForm.css";

const CompleteForm = ({ onBack, onDone }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleDone = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    setError("");

    // Log or handle collected data
    console.log("Form submission:", { name, email, phone });

    // Only call onDone after validation
    if (onDone) onDone({ name, email, phone });
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
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="complete-form-control">
              <p>What’s your email address?</p>
              <input
                type="text"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="complete-form-control">
              <p>What’s your phone number?</p>
              <input
                type="text"
                placeholder="+27 624 286 152"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

          <div className="complete">
            <button type="button" onClick={handleDone} style={{ marginLeft: "1rem" }}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteForm;
