import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { FeatureGrid } from "./components/FeatureGrid";

export const FeaturesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  return (
    <section id="features" ref={ref} className="relative box-border caret-transparent z-10 px-4 py-20 md:px-8 md:py-32">
      <div className="box-border caret-transparent max-w-6xl mx-auto">
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
            [ PLATFORM FEATURES ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[28px] font-semibold box-border caret-transparent tracking-[-0.28px] leading-[33.6px] mb-6 md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]"
          >
            Everything You Need To{" "}
            <span className="text-red-500 text-[28px] box-border caret-transparent tracking-[-0.28px] leading-[33.6px] md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]">
              Launch Your Career
            </span>
          </motion.h2>
        </motion.div>
        <FeatureGrid />
      </div>
    </section>
  );
};