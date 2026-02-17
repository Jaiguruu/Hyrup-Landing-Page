import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../../hooks/useInView";
import { FeatureCard } from "../../../components/FeatureCard";

export const ProblemSolutionGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="box-border caret-transparent gap-x-6 grid grid-cols-none gap-y-6 md:grid-cols-[repeat(2,minmax(0px,1fr))]"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <FeatureCard
          variant="relative bg-[oklab(0_0_0_/_0.05)] dark:bg-[oklab(1_0_0_/_0.05)] border-[oklab(0_0_0_/_0.2)] dark:border-[oklab(1_0_0_/_0.2)] transition-all duration-300 hover:border-red-500 hover:shadow-lg"
        iconType="badge"
        badgeText="THE PROBLEM"
        badgeVariant="text-xs tracking-[1.2px] leading-[18px] opacity-60 uppercase font-ibm_plex_mono"
        title="Your Resume Gets Ignored"
        description="Cold emails, endless scrolling, zero responses. The traditional job hunt is broken. Your tier-3 college name shouldn't decide your career."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <FeatureCard
          variant="relative bg-[oklab(0.657625_0.157987_0.0754443_/_0.05)] dark:bg-[oklab(0.657625_0.157987_0.0754443_/_0.1)] border-[oklab(0.657625_0.157987_0.0754443_/_0.3)] dark:border-[oklab(0.657625_0.157987_0.0754443_/_0.4)] transition-all duration-300 hover:border-red-500 hover:shadow-lg"
        iconType="badge"
        badgeText="THE SOLUTION"
        badgeVariant="text-red-500 text-xs tracking-[1.2px] leading-[18px] uppercase font-ibm_plex_mono"
        title="Skills Over Degrees"
        description="HYRUP matches you with opportunities based on what you can actually do. Real mentors. Real skills. Real jobs. No gatekeeping."
        />
      </motion.div>
    </motion.div>
  );
};