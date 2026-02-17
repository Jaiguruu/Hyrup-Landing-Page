import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../hooks/useInView";

export const FinalCTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="relative bg-[oklab(0_0_0_/_0.05)] box-border caret-transparent z-10 px-4 py-20 md:px-8 md:py-32">
      <div className="box-border caret-transparent max-w-4xl text-center mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[40px] font-bold box-border caret-transparent tracking-[-0.8px] leading-[44px] mb-6 md:text-[76.8px] md:tracking-[-1.536px] md:leading-[84.48px] dark:text-white"
        >
          Ready To Launch Your{" "}
          <span className="text-red-500 text-[40px] box-border caret-transparent tracking-[-0.8px] leading-[44px] md:text-[76.8px] md:tracking-[-1.536px] md:leading-[84.48px]">
            Career?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[oklab(0_0_0_/_0.7)] dark:text-gray-300 text-lg box-border caret-transparent leading-[29.25px] max-w-2xl mb-12 mx-auto md:text-xl md:leading-[32.5px]"
        >
          Join 3,154+ students who are getting hired for their skills, not their
          degrees.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4 md:flex-row"
        >
          <a
            href="https://students.hyrup.in/"
            className="text-sm font-medium bg-red-500 box-border caret-transparent block tracking-[0.7px] leading-[21.7778px] uppercase w-full px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr font-ibm_plex_mono md:w-auto transition-all duration-200 hover:bg-red-600 active:scale-95"
          >
            JOIN HYRUP NOW →
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs box-border caret-transparent leading-[18px] opacity-60 dark:opacity-40 dark:text-gray-400 mt-6 font-ibm_plex_mono"
        >
          No credit card required • 100% free forever • 2 min setup
        </motion.p>
      </div>
    </section>
  );
};