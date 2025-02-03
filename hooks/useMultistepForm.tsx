"use client";

import { useState } from "react";

export const useMultiStepForm = (steps: number) => {
  const [currentStepNumber, setCurrentStepNumber] = useState(1);

  const nextStep = () => {
    setCurrentStepNumber((i) => {
      if (i >= steps) return i;
      return i + 1;
    });
  };

  const backStep = () => {
    setCurrentStepNumber((i) => {
      if (i <= 1) return i;
      return i - 1;
    });
  };

  const goToStep = (index: number) => {
    setCurrentStepNumber(index);
  };

  return {
    setCurrentStepNumber,
    isFirstStep: currentStepNumber === 1,
    isLastStep: currentStepNumber === steps,
    nextStep,
    backStep,
    goToStep,
    steps,
  };
};
