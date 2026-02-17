import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { CommunityStats } from "./components/CommunityStats";
import { CTACard } from "./components/CTACard";

export const CommunitySection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="relative box-border caret-transparent z-10 px-4 py-20 md:px-8 md:py-32">
      <div className="box-border caret-transparent max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="box-border caret-transparent text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.6 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs box-border caret-transparent block tracking-[2.4px] leading-[18px] opacity-60 uppercase mb-4 font-ibm_plex_mono"
          >
            [ STUDENT COMMUNITY ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[28px] font-semibold box-border caret-transparent tracking-[-0.28px] leading-[33.6px] mb-6 md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px] dark:text-white"
          >
            Join{" "}
            <span className="text-red-500 text-[28px] box-border caret-transparent tracking-[-0.28px] leading-[33.6px] md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]">
              3,154+
            </span>
            Students Already On HYRUP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-[oklab(0_0_0_/_0.7)] dark:text-gray-300 text-lg box-border caret-transparent leading-7 max-w-2xl mx-auto"
          >
            Students from colleges across India are already building their
            future with HYRUP.
          </motion.p>
        </motion.div>
        <CommunityStats />
        <CTACard />
      </div>
    </section>
  );
};