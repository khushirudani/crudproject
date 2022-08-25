import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
const Steps = () => {
  const demos = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];
  const [step, setSteps] = useState(0);

  const next = () => {
    setSteps(step + 1);
    console.log(step);
  };

  const prev = () => {
    setSteps(step - 1);
    console.log(step);
  };

  const [classname,setClassname]=useState()

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Stepper
          activeStep={step} 
          activeColor='green'
          connectorStateColors>
  
          <Step label="Step 1"                    onClick={() =>{ setSteps(0) }}/>
          <Step label="Step 2"  onClick={() =>{ setSteps(1) }}/>
          <Step label="Step 3"   onClick={() =>{ setSteps(2) }}/>
        </Stepper>
         <div className="steps-content">{demos[step].content}</div> 

        {step > 0 && (
          <button type="button" onClick={() => prev()}>
            prev
          </button>
        )}

        {step < demos.length - 1 && (
          <button
            type="button"
            onClick={() => next()}
            style={{ marginRight: "20px" }}
          >
            next
          </button>
        )}

        {step === demos.length - 1 && (
          <button type="primary" onClick={() => alert("Processing complete!")}>
            Done
          </button>
        )}
      </div>
    </>
  );
};

export default Steps;
