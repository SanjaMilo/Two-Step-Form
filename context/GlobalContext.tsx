"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define types for user data and error message
interface UserData {
  firstName: string;
  lastName: string;
  prefix: string;
  phoneNumber: string;
};

interface ErrorMessage {
  [key: string]: string;
};

interface StepContextData {
  stepNumber: number;
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  userData: UserData;
  errorMessage: ErrorMessage;
  setErrorMessage: React.Dispatch<React.SetStateAction<ErrorMessage>>;
};

// Create context
const StepContext = createContext<StepContextData | null>(null);

type ContextProviderProps = {
  children?: ReactNode;
};

// Create a provider
export function StepContextProvider({ children }: ContextProviderProps) {
  const steps = 2; // This is a two-step form 
  const [stepNumber, setStepNumber] = useState<number>(1);
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    prefix: "+44",
    phoneNumber: "",
  });
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({});

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
};

// Create a custom hook to access context
export function useStepContext() {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error("useStepContext must be used within a StepContextProvider");
  }
  return context;
};