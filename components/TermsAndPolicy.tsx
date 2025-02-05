"use client";

import { useStepContext } from "@/context/GlobalContext";
import { motion } from "framer-motion";
import Link from "next/link";

const TermsAndPolicy = () => {
  const { stepNumber } = useStepContext()!;
  const steps = 2;
  const isLastStep = stepNumber === steps;

  return (
    <motion.p
      initial={{ x: isLastStep ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="mt-10 text-start text-sm/6 text-gray-500"
    >
      By clicking 'Continue' you confirm that you agree to our{" "}
      <Link
        href="/policy"
        className="font-semibold text-blue-600 hover:text-blue-500"
      >
        terms and conditions
      </Link>{" "}
      and{" "}
      <Link
        href="/policy"
        className="font-semibold text-blue-600 hover:text-blue-500"
      >
        privacy policy
      </Link>
    </motion.p>
  );
};

export default TermsAndPolicy;
