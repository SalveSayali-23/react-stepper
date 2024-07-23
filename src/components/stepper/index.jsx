import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

const StepperComp = () => {
  const [activeStep, setActiveStep] = useState(0);

  const previousStep = () => {
    if (activeStep !== -1) setActiveStep((currentStep) => currentStep - 1);
  };

  const nextStep = () => {
    if (activeStep < 2) setActiveStep((currentStep) => currentStep + 1);
  };

  return (
    <div style={{ marginLeft: 130, marginTop: 130 }}>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Register</StepLabel>
        </Step>

        <Step>
          <StepLabel>Login</StepLabel>
        </Step>

        <Step>
          <StepLabel>Processed</StepLabel>
        </Step>
      </Stepper>
      <h3>{activeStep}</h3>
      <div style={{ marginTop: 50 }}>
        <Button
          variant="outlined"
          onClick={() => {
            previousStep();
          }}
        >
          Previous Step
        </Button>
      </div>
      <div style={{ marginTop: 50 }}>
        <Button
          variant="outlined"
          onClick={() => {
            nextStep();
          }}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default StepperComp;
