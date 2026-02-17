import { motion } from "framer-motion";
import { AnimatedCounter } from "../../components/AnimatedCounter";

export const HeroSection = () => {
  return (
    <section className="relative box-border caret-transparent z-10 pt-32 pb-20 px-4 md:pt-40 md:pb-32 md:px-8">
      <div className="box-border caret-transparent max-w-6xl text-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[oklab(0.657625_0.157987_0.0754443_/_0.1)] dark:bg-[oklab(0.657625_0.157987_0.0754443_/_0.2)] box-border caret-transparent inline-block border mb-6 px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0.657625_0.157987_0.0754443_/_0.3)] dark:border-[oklab(0.657625_0.157987_0.0754443_/_0.5)]"
        >
          <span className="text-red-500 text-xs box-border caret-transparent tracking-[1.2px] leading-[18px] uppercase font-ibm_plex_mono">
            🎓 Free for Students
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[40px] font-bold box-border caret-transparent tracking-[-0.8px] leading-[44px] mb-6 md:text-[76.8px] md:tracking-[-1.536px] md:leading-[84.48px]"
        >
          Get Hired For Your{" "}
          <span className="text-red-500 text-[40px] box-border caret-transparent tracking-[-0.8px] leading-[44px] md:text-[76.8px] md:tracking-[-1.536px] md:leading-[84.48px]">
            Skills
          </span>
          ,
          <br className="text-[40px] box-border caret-transparent tracking-[-0.8px] leading-[44px] md:text-[76.8px] md:tracking-[-1.536px] md:leading-[84.48px]" />
          Not Your Degree
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[oklab(0_0_0_/_0.7)] dark:text-[oklab(1_0_0_/_0.7)] text-lg box-border caret-transparent leading-[29.25px] max-w-screen-md mb-12 mx-auto md:text-2xl md:leading-[39px]"
        >
          The student career launchpad where your abilities matter more than
          your college name. Connect with mentors, build real skills, and land
          opportunities that actually fit you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4 mb-16 md:flex-row"
        >
          <a
            href="https://students.hyrup.in/"
            className="text-sm font-medium bg-red-500 box-border caret-transparent block tracking-[0.7px] leading-[21px] uppercase w-full px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr font-ibm_plex_mono md:w-auto transition-all duration-200 hover:bg-red-600 active:scale-95"
          >
            GET STARTED FREE →
          </a>
          <a
            href="#features"
            className="text-stone-400 dark:text-gray-900 text-sm font-medium bg-black dark:bg-white box-border caret-transparent block tracking-[0.7px] leading-[21px] uppercase w-full px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr font-ibm_plex_mono md:w-auto transition-all duration-200 hover:bg-gray-900 dark:hover:bg-gray-200 active:scale-95"
          >
            EXPLORE FEATURES
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(2,minmax(0px,1fr))] max-w-4xl gap-y-4 mx-auto md:grid-cols-[repeat(4,minmax(0px,1fr))]"
        >
          {[
            { end: 3154, suffix: '+', label: 'Students Connected' },
            { end: 500, suffix: '+', label: 'Partner Companies' },
            { end: 2000, suffix: '+', label: 'Active Jobs' },
            { end: 100, suffix: '%', label: 'Free Forever' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              className="bg-[oklab(0_0_0_/_0.05)] dark:bg-[oklab(1_0_0_/_0.05)] box-border caret-transparent border p-6 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0_0_0_/_0.1)] dark:border-[oklab(1_0_0_/_0.1)] transition-all duration-300 hover:border-red-500 hover:shadow-lg"
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                className="text-red-500 text-[28px] font-semibold box-border caret-transparent tracking-[-0.28px] leading-[33.6px] mb-2 md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px]"
              />
              <div className="text-xs box-border caret-transparent leading-[18px] opacity-60 dark:opacity-50 font-ibm_plex_mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};