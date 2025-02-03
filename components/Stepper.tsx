"use client";

import { BsDot } from "react-icons/bs";
import { Bs1CircleFill, Bs2CircleFill } from "react-icons/bs";
import { useStepContext } from "@/context/GlobalContext";

const Stepper = () => {
  const { stepNumber } = useStepContext();
  const steps = 2;
  const isFirstStep = stepNumber === 1;
  const isLastStep = stepNumber === steps;

  return (
    <div className="flex items-center justify-center pt-5">
      <div className="">
        <Bs1CircleFill
          size={25}
          className={isFirstStep ? "text-blue-600" : "text-gray-300"}
        />
      </div>
      <div>
        <BsDot size={25} className="text-gray-300" />
      </div>
      <div className="">
        <Bs2CircleFill
          size={25}
          className={isLastStep ? "text-blue-600" : "text-gray-300"}
        />
      </div>
    </div>
  );
};

export default Stepper;
