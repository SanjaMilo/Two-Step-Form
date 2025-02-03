"use client";

import { createContext, useContext, useState } from "react";

// Create context
const StepContext = createContext();
// Create a provider
export function StepContextProvider({ children }) {
  const steps = 2; // This is a two-steps form 
  const [stepNumber, setStepNumber] = useState(1);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    prefix: "+44",
    phoneNumber: "",
  });
  const [errorMessage, setErrorMessage] = useState({});

  return (
    <StepContext.Provider
      value={{
        stepNumber,
        setStepNumber,
        setUserData,
        userData,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

// Create a custom hook to access context
export function useStepContext() {
  return useContext(StepContext);
}
