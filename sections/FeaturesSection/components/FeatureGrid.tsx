import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../../../hooks/useInView";
import { FeatureCard } from "../../../components/FeatureCard";

import {
  BadgeCheck,
  Zap,
  Brain,
  GraduationCap,
  Rocket,
  MessageCircle
} from "lucide-react";

export const FeatureGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const features = [
    {
      icon: BadgeCheck,
      title: "Skill-Based Profiles",
      description:
        "Showcase what you can actually do, not where you studied. Build a portfolio that proves your worth."
    },
    {
      icon: Zap,
      title: "5-Minute Skill Proof",
      description:
        "Quick assessments that showcase your abilities to employers. No more endless coding marathons."
    },
    {
      icon: Brain,
      title: "Smart Job Matching",
      description:
        "AI-powered connections that actually fit your skills and goals. Context, not just keywords."
    },
    {
      icon: GraduationCap,
      title: "Mentor-Led Communities",
      description:
        "Join exclusive communities led by industry experts. Learn from people who've been there."
    },
    {
      icon: Rocket,
      title: "Early Access Jobs",
      description:
        "See new opportunities before they go public. The early bird advantage, automated."
    },
    {
      icon: MessageCircle,
      title: "Direct Connections",
      description:
        "Skip the cold DMs. Connect directly with recruiters and mentors who want to meet you."
    }
  ];

  return (
    <div
      ref={ref}
      className="grid gap-6 md:grid-cols-3 caret-transparent"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.1 * index,
            ease: "easeOut"
          }}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            variant="bg-[oklab(0_0_0_/_0.05)] dark:bg-[oklab(1_0_0_/_0.05)]
                     border-[oklab(0_0_0_/_0.1)] dark:border-[oklab(1_0_0_/_0.1)]
                     transition-all duration-300
                     hover:border-red-500 hover:shadow-lg hover:-translate-y-1"
          />
        </motion.div>
      ))}
    </div>
  );
};
