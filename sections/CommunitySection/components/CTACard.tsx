import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../../hooks/useInView";

export const CTACard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="relative bg-[linear-gradient(to_right,oklab(0.657625_0.157987_0.0754443_/_0.2)_0%,oklab(0.657625_0.157987_0.0754443_/_0.1)_50%,oklab(0.657625_0.157987_0.0754443_/_0.2)_100%)] dark:bg-[linear-gradient(to_right,oklab(0.657625_0.157987_0.0754443_/_0.3)_0%,oklab(0.657625_0.157987_0.0754443_/_0.2)_50%,oklab(0.657625_0.157987_0.0754443_/_0.3)_100%)] box-border caret-transparent text-center border overflow-hidden p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0.657625_0.157987_0.0754443_/_0.4)] dark:border-[oklab(0.657625_0.157987_0.0754443_/_0.5)] md:p-12 transition-all duration-300 hover:border-red-500 hover:shadow-lg"
    >
      <div className="absolute text-4xl box-border caret-transparent leading-10 opacity-20 right-4 top-4"></div>
      <div className="absolute text-4xl box-border caret-transparent leading-10 opacity-20 left-4 bottom-4"></div>
      <div className="relative box-border caret-transparent z-10">
        <h3 className="text-[28px] font-semibold box-border caret-transparent tracking-[-0.28px] leading-[33.6px] mb-4 md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]">
          100% Free. Forever.
        </h3>
        <p className="text-[oklab(0_0_0_/_0.7)] dark:text-gray-200 text-lg box-border caret-transparent leading-7 max-w-2xl mb-6 mx-auto">
          Join 3,154+ students who are already using HYRUP to build their
          careers. No hidden fees, no premium plans, no credit card required.
        </p>
        <a
          href="https://students.hyrup.in/"
          className="text-sm font-medium bg-red-500 box-border caret-transparent inline-block tracking-[0.7px] leading-[21px] uppercase px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr font-ibm_plex_mono transition-all duration-200 hover:bg-red-600 active:scale-95"
        >
          START FOR FREE →
        </a>
      </div>
    </motion.div>
  );
};