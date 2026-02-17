import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { FixForwardContent } from "./components/FixForwardContent";

export const FixForwardSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="relative bg-[oklab(0.657625_0.157987_0.0754443_/_0.05)] dark:bg-[oklab(0.657625_0.157987_0.0754443_/_0.08)] box-border caret-transparent z-10 px-4 py-20 border-b border-t border-solid border-[oklab(0.657625_0.157987_0.0754443_/_0.2)] dark:border-[oklab(0.657625_0.157987_0.0754443_/_0.3)] md:px-8 md:py-32">
      <div className="box-border caret-transparent max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="box-border caret-transparent text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[oklab(0.657625_0.157987_0.0754443_/_0.2)] dark:bg-[oklab(0.657625_0.157987_0.0754443_/_0.3)] box-border caret-transparent inline-block border mb-6 px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0.657625_0.157987_0.0754443_/_0.4)] dark:border-[oklab(0.657625_0.157987_0.0754443_/_0.5)]"
          >
            <span className="text-red-500 text-xs font-bold box-border caret-transparent tracking-[1.2px] leading-[18px] uppercase font-ibm_plex_mono">
              HYRUP PRESENTS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[28px] font-semibold box-border caret-transparent tracking-[-0.28px] leading-[33.6px] mb-6 md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]"
          >
            <span className="text-red-500 text-[28px] box-border caret-transparent tracking-[-0.28px] leading-[33.6px] md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]">
              FIX FORWARD
            </span>
            Challenge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-[oklab(0_0_0_/_0.7)] dark:text-[oklab(1_0_0_/_0.7)] text-lg box-border caret-transparent leading-[29.25px] max-w-screen-md mb-8 mx-auto md:text-xl md:leading-[32.5px]"
          >
            Healthcare&#39;s broken? Fix it. Education system outdated? Rebuild
            it. Climate crisis? Solve it. See something broken in your world?
            Don&#39;t just complain — fix it and pass it forward.
          </motion.p>
        </motion.div>
        <FixForwardContent />
      </div>
    </section>
  );
};