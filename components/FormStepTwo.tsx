"use client";

import { BiChevronDown } from "react-icons/bi";
import { useStepContext } from "@/context/GlobalContext";
import { motion } from "framer-motion";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import SearchCountry from "./SearchCountry";

const FormStepTwo = () => {
  const { stepNumber, setUserData, userData, errorMessage } = useStepContext()!;
  const steps = 2;
  const isLastStep = stepNumber === steps;

  const redBorderPhoneNumber = errorMessage.phoneNumber
    ? "outline-red-500"
    : "outline-gray-300";

  return (
    <motion.div
      initial={{ x: isLastStep ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <label
        htmlFor="phoneNumber"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Phone Number
      </label>
      <div className="mt-2">
        <div className="flex justify-between items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-600">
          <div className="block w-1/4">
            <div className="focus-within:relative mr-1">
              <SearchCountry />
            </div>
          </div>
          <div className="block w-3/4">
            <input
              value={userData["phoneNumber"]}
              onChange={(e) => {
                setUserData({ ...userData, phoneNumber: e.target.value });
              }}
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="987 123456"
              className={`block w-full rounded-3xl bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 outline placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6 ${redBorderPhoneNumber}`}
            />
          </div>
        </div>
        {errorMessage.prefix && (
          <p className="mt-1 mb-5 text-start text-sm/6 text-red-500">
            <AiOutlineExclamationCircle className="inline align-baseline mr-1" />
            {errorMessage.prefix}
          </p>
        )}
        {errorMessage.phoneNumber && (
          <p className="mt-1 mb-5 text-start text-sm/6 text-red-500">
            <AiOutlineExclamationCircle className="inline align-baseline mr-1" />
            {errorMessage.phoneNumber}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default FormStepTwo;
