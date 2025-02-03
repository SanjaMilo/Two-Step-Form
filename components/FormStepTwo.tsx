"use client";

import { BiChevronDown } from "react-icons/bi";
import { useStepContext } from "@/context/GlobalContext";
import { motion } from "framer-motion";

const FormStepTwo = () => {
  const { stepNumber, setUserData, userData, errorMessage } = useStepContext();

  return (
    <motion.div
      initial={{ x: stepNumber >= 2 ? "50%" : "-50%", opacity: 0 }}
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
          <div className="block">
            <div className="grid shrink-0 grid-cols-1 focus-within:relative mr-1">
              <select
                value={userData["prefix"]}
                onChange={(e) => {
                  setUserData({ ...userData, prefix: e.target.value });
                }}
                id="prefix"
                name="prefix"
                aria-label="country prefix number"
                className="block col-start-1 outline outline-gray-300 outline-1 rounded-3xl row-start-1 w-full appearance-none py-1.5 pr-7 pl-3 text-base text-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
              >
                <option value="+44">+44</option>
                <option value="+1">+1</option>
                <option value="+389">+389</option>
              </select>
              <BiChevronDown
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </div>
            {errorMessage.prefix && (
              <p className="mt-1 mb-5 text-start text-sm/6 text-red-500">
                {errorMessage.prefix}
              </p>
            )}
          </div>

          <div className="flex-1">
            <input
              value={userData["phoneNumber"]}
              onChange={(e) => {
                setUserData({ ...userData, phoneNumber: e.target.value });
              }}
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="987 123456"
              className="block w-full rounded-3xl bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 outline placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
            />
          </div>
        </div>
        {errorMessage.phoneNumber && (
          <p className="mt-1 mb-5 text-start text-sm/6 text-red-500">
            {errorMessage.phoneNumber}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default FormStepTwo;
