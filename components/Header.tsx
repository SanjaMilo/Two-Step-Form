"use client";

import Image from "next/image";
import numberLogo from "@/assets/images/25.png";
import { FaArrowLeft } from "react-icons/fa6";
import Stepper from "./Stepper";
import { useStepContext } from "@/context/GlobalContext";

const Header = () => {
  const { stepNumber, setStepNumber } = useStepContext();
  const isFirstStep = stepNumber === 1;

  const backStep = () => {
    console.log(stepNumber);
    setStepNumber((prevStepNumber: number) => {
      if (prevStepNumber <= 1) return prevStepNumber;
      return prevStepNumber - 1;
    });
  };

  return (
    <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
      {!isFirstStep && (
        <div onClick={backStep} className="absolute top-3">
          <FaArrowLeft size={25} className="text-gray-600" />
        </div>
      )}

      <Image
        className="mx-auto h-11 w-auto"
        src={numberLogo}
        alt="Logo image with number 25"
        width={0}
        height={0}
      />
      <Stepper />
    </div>
  );
};

export default Header;
