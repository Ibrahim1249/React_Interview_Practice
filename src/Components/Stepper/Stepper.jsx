import React, { useState } from "react";

function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <>
      <div className="stepper-container">
        <div className="steppers">
          {steps.map(({ label, content }, index) => {
            return (
              <div key={index} className="stepper">
                <div
                  className={index <= currentStep ? "step-number active" : "step-number"}
                >
                  {index + 1}
                  {index < steps.length - 1 && (
                    <div className={index < currentStep ? "step-line active" : "step-line"}></div>
                  )}
                </div>
                <div className="step-label">{label}</div>
              </div>
            );
          })}
        </div>
        <div className="stepper-content">{steps[currentStep].content}</div>
        <div className="stepper-buttons">
          {currentStep > 0 &&  <button onClick={handleBack}>Back</button>}
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </>
  );
}

export default Stepper;
