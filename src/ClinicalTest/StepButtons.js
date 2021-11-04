import React from "react";

const StepButtons = ({ step }) => {
  return (
    <div className="stepbtns">
      <button className={step === 0 ? "stepbtn active1" : "stepbtn"}>
        Begin
      </button>

      <button className={step === 1 ? "stepbtn active1" : "stepbtn"}>
        What you’ll learn
      </button>

      <button className={step === 2 ? "stepbtn active1" : "stepbtn"}>
        Course Content
      </button>
    </div>
  );
};

export default StepButtons;
