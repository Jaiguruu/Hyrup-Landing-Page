import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { ProblemSolutionGrid } from "./components/ProblemSolutionGrid";

export const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="relative bg-[oklab(0_0_0_/_0.05)] dark:bg-[oklab(1_0_0_/_0.03)] box-border caret-transparent z-10 px-4 py-20 md:px-8 md:py-32">
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
            className="text-xs box-border caret-transparent block tracking-[2.4px] leading-[18px] opacity-60 dark:opacity-50 uppercase mb-4 font-ibm_plex_mono"
          >
            [ ABOUT HYRUP ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[28px] font-semibold box-border caret-transparent tracking-[-0.28px] leading-[33.6px] mb-6 md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]"
          >
            We&#39;re Fixing The{" "}
            <span className="text-red-500 text-[28px] box-border caret-transparent tracking-[-0.28px] leading-[33.6px] md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]">
              Broken System
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-[oklab(0_0_0_/_0.7)] dark:text-[oklab(1_0_0_/_0.7)] text-lg box-border caret-transparent leading-[29.25px] max-w-screen-md mx-auto md:text-xl md:leading-[32.5px]"
          >
            Built by students, for students. We&#39;re tired of LinkedIn DMs
            that go nowhere, job applications that disappear into black holes,
            and a system that values college names over actual skills.
          </motion.p>
        </motion.div>
        <ProblemSolutionGrid />
      </div>
    </section>
  );
};