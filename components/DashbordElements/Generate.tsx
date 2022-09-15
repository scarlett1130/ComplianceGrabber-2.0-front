import React, { useState } from "react";
import DahbordHeader from "./DahbordHeader";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Stepper from "./Stepper";

function Generate() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [step, setstep] = useState(1);
  function NextStep() {
    if (step < 3) setstep(step + 1);
  }
  return (
    <div className="">
      <DahbordHeader title="Generate Data" />
      <div className="mt-9">
        <Stepper step={step} />
        {step == 1 ? (
          <Step1 nextStep={NextStep} />
        ) : step == 2 ? (
          <Step2 nextStep={NextStep} />
        ) : (
          <p>ok</p>
        )}
      </div>
    </div>
  );
}

export default Generate;
