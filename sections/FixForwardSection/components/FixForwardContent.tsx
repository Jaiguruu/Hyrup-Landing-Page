import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../../hooks/useInView";
import { InfoCard } from "./InfoCard";

export const FixForwardContent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <InfoCard
        title="The Meaning Behind FixForward"
        content={
          <>
            <p className="text-sm box-border caret-transparent leading-[22.4px] opacity-70 dark:opacity-60 mb-4 font-ibm_plex_mono">
              There's a saying — when someone helps you, you don't just thank
              them. You help someone else in need. The cycle continues.
            </p>
            <p className="text-sm box-border caret-transparent leading-[22.4px] opacity-70 mb-4 font-ibm_plex_mono">
              FixForward is built on the same idea. You see something broken in
              society? Fix it. Not just for yourself, but for the next
              generation. Forward the fix.
            </p>
            <p className="text-sm box-border caret-transparent leading-[22.4px] opacity-70 dark:opacity-60 mb-6 font-ibm_plex_mono">
              We're looking for problem-solvers who see issues in their daily
              lives and have the courage to create solutions that ripple
              forward.
            </p>
            <ul className="box-border caret-transparent list-none pl-0">
              <li className="items-start box-border caret-transparent gap-x-3 flex gap-y-3 mb-3">
                <span className="text-red-500 box-border caret-transparent block mt-1">
                  →
                </span>
                <span className="text-sm box-border caret-transparent block leading-[22.4px] opacity-70 dark:opacity-60 font-ibm_plex_mono">
                  Build tech that actually matters
                </span>
              </li>
              <li className="items-start box-border caret-transparent gap-x-3 flex gap-y-3 mb-3">
                <span className="text-red-500 box-border caret-transparent block mt-1">
                  →
                </span>
                <span className="text-sm box-border caret-transparent block leading-[22.4px] opacity-70 font-ibm_plex_mono">
                  Vibe with industry mentors who've been there
                </span>
              </li>
              <li className="items-start box-border caret-transparent gap-x-3 flex gap-y-3 mb-3">
                <span className="text-red-500 box-border caret-transparent block mt-1">
                  →
                </span>
                <span className="text-sm box-border caret-transparent block leading-[22.4px] opacity-70 font-ibm_plex_mono">
                  Win cash + flex your project everywhere
                </span>
              </li>
              <li className="items-start box-border caret-transparent gap-x-3 flex gap-y-3">
                <span className="text-red-500 box-border caret-transparent block mt-1">
                  →
                </span>
                <span className="text-sm box-border caret-transparent block leading-[22.4px] opacity-70 font-ibm_plex_mono">
                  Network with builders, not just coders
                </span>
              </li>
            </ul>
          </>
        }
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <InfoCard
        title="Why Join?"
        content={
          <p className="text-sm box-border caret-transparent leading-[22.4px] opacity-70 mb-6 font-ibm_plex_mono">
            Stop building todo apps. Start solving actual problems. Your skills
            deserve a better stage. This is where your code stops being homework
            and starts being a portfolio piece recruiters actually want to see.
          </p>
        }
        showRegistrationInfo={true}
        registrationDeadline="Last Date: 25th February"
        prizeAmount="₹3L"
        prizeDescription="Cash, awards, jobs & internships"
        ctaText="REGISTER FOR FIX FORWARD →"
        ctaUrl="https://fixforward.hyrup.in/"
        />
      </motion.div>
    </motion.div>
  );
};