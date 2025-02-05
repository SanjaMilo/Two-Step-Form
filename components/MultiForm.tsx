"use client";

import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import TermsAndPolicy from "./TermsAndPolicy";
import LinkToUser from "./LinkToUser";
import { useStepContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { motion } from "framer-motion";
import { z } from "zod";

const MultiForm = () => {
  const { stepNumber, setStepNumber, userData, setUserData, setErrorMessage } = useStepContext()!; // non-null assertion operator (!)
  const steps = 2;
  const isFirstStep = stepNumber === 1;
  const isLastStep = stepNumber === steps;

  // Form Validation using 'Zod' validation library
  const formOneSchema = z.object({
    firstName: z
      .string()
      .trim()
      .regex(
        /^[A-Za-z\s]+$/,
        "We only except letters and spaces for names, no special characters"
      )
      .min(1, "Please enter a first name")
      .max(30, "First name must have at most 30 letters"),
    lastName: z
      .string()
      .trim()
      .regex(
        /^[A-Za-z\s]+$/,
        "We only except letters and spaces for names, no special characters"
      )
      .min(1, "Please enter a last name")
      .max(30, "Last name must have at most 30 letters"),
  });

  const formTwoSchema = z.object({
    prefix: z.string().regex(/^\+\d+$/, {
      message: "Phone number must start with '+' followed by numbers.",
    }).min(2, "Phone prefix must be at least 2 characters long"),
    phoneNumber: z
      .string()
      .regex(
        /^[0-9]+$/,
        "Please check that the phone number is in the correct format"
      )
      .min(5, "Phone number must be at least 5 numbers"),
  });

  const router = useRouter();

  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const parsedFormOneData = formOneSchema.safeParse(userData);

    if (!parsedFormOneData.success) {
      const error = parsedFormOneData.error;
      let newErrors = {};
      for (const issue of error.issues) {
        newErrors = {
          ...newErrors,
          [issue.path[0]]: issue.message,
        };
      }

      return setErrorMessage(newErrors);
    }
    setStepNumber((prevStepNumber: number) => {
      if (prevStepNumber >= steps) return prevStepNumber;
      return prevStepNumber + 1;
    });
  };

  const submitFormData = (e: FormEvent) => {
    e.preventDefault();

    const parsedFormTwoData = formTwoSchema.safeParse(userData);

    if (!parsedFormTwoData.success) {
      const error = parsedFormTwoData.error;
      console.log("Errors", error);
      let newErrors = {};
      for (const issue of error.issues) {
        newErrors = {
          ...newErrors,
          [issue.path[0]]: issue.message,
        };
      }
      
      return setErrorMessage(newErrors);
    }
    
    // No API fetch od Database implementation
    setUserData({
      firstName: "",
      lastName: "",
      prefix: "+44",
      phoneNumber: "",
    });
    setErrorMessage({});
    setStepNumber(1);

    router.push("/dashboard");
  };

  return (
    <motion.div
      initial={{ x: isLastStep ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm"
    >
      <motion.h2
        initial={{ x: isLastStep ? "50%" : "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="my-5 text-xl font-bold tracking-tight text-gray-900"
      >
        {isFirstStep ? "Some Introductions" : "Let's validate your number"}
      </motion.h2>

      <form onSubmit={submitFormData} className="space-y-6">
        {/* Form Steps */}
        {isFirstStep ? <FormStepOne /> : <FormStepTwo />}

        {isLastStep && <TermsAndPolicy />}

        <div>
          {isFirstStep ? (
            <button
              onClick={nextStep}
              type="button"
              className="flex w-full justify-center rounded-3xl bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="flex w-full justify-center rounded-3xl bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Continue
            </button>
          )}
        </div>
      </form>

      {isFirstStep && <LinkToUser />}
    </motion.div>
  );
};

export default MultiForm;
