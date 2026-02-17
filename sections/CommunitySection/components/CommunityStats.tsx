import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../../hooks/useInView";
import { StatsCard } from "./StatsCard";

export const CommunityStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 mb-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <StatsCard
          title="Top Active Colleges"
          variant="colleges"
          colleges={[
            { name: "SASTRA University", students: 834, percentage: 100 },
            { name: "JIT", students: 676, percentage: 81 },
            { name: "PEC", students: 559, percentage: 67 },
            { name: "Manipur University", students: 358, percentage: 43 },
          ]}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <StatsCard
          title="Community Growth"
          variant="growth"
          stats={[
            {
              value: "3,154",
              label: "+12% this month",
              description: "Total Active Students",
            },
            {
              value: "4",
              label: "top colleges",
              description: "Participating Colleges",
            },
            {
              value: "500+",
              label: "hiring now",
              description: "Partner Companies",
            },
            {
              value: "100%",
              label: "forever free",
              description: "Free For All Students",
              labelOpacity: true,
            },
          ]}
        />
      </motion.div>
    </div>
  );
};