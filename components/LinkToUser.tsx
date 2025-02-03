"use client";

import { useStepContext } from "@/context/GlobalContext";
import { motion } from "framer-motion";
import Link from "next/link";

const LinkToUser = () => {
  const { stepNumber } = useStepContext();

  return (
    <motion.p
      initial={{ x: stepNumber >= 2 ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="mt-10 text-center text-sm/6 text-gray-500"
    >
      <Link
        href="/"
        className="font-semibold text-blue-600 hover:text-blue-500"
      >
        Already have an account?
      </Link>
    </motion.p>
  );
};

export default LinkToUser;
