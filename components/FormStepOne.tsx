"use client";

import { useStepContext } from "@/context/GlobalContext";
import { motion } from "framer-motion";

const FormStepOne = () => {
  const { stepNumber, setUserData, userData, errorMessage } = useStepContext();

  return (
    <motion.div
      initial={{ x: stepNumber >= 2 ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
    >
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm/6 font-medium text-gray-900"
        >
          First Name
        </label>
        <div className="mt-2">
          <input
            value={userData["firstName"]}
            onChange={(e) => {
              setUserData({ ...userData, firstName: e.target.value });
            }}
            id="firstName"
            name="firstName"
            type="text"
            required
            className="block w-full rounded-3xl bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 outline placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
          />
        </div>
        {errorMessage.firstName && (
          <p className="mt-1 mb-5 text-start text-sm/6 text-red-500">
            {errorMessage.firstName}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="lastName"
            className="block text-sm/6 font-medium text-gray-900"
          >
            LastName
          </label>
        </div>
        <div className="mt-2">
          <input
            value={userData["lastName"]}
            onChange={(e) => {
              setUserData({ ...userData, lastName: e.target.value });
            }}
            id="lastName"
            name="lastName"
            type="text"
            required
            className="block w-full rounded-3xl bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 outline placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
          />
        </div>
        {errorMessage.lastName && (
          <p className="mt-1 mb-5 text-start text-sm/6 text-red-500">
            {errorMessage.lastName}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default FormStepOne;
