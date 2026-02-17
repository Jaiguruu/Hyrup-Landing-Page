import React from 'react';
import SectionLabel from './ui/SectionLabel';
import { motion } from 'framer-motion';
import { Target, Zap, Bot, GraduationCap, Rocket, Users } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    icon: <Target className="w-5 h-5 text-purple-500" />,
    title: "Skill-Based Profiles",
    description: "Showcase what you can actually do, not where you studied. Build a portfolio that proves your worth."
  },
  {
    icon: <Zap className="w-5 h-5 text-orange-500" />,
    title: "5-Minute Skill Proof",
    description: "Quick assessments that showcase your abilities to employers. No more endless coding marathons."
  },
  {
    icon: <Bot className="w-5 h-5 text-blue-500" />,
    title: "Smart Job Matching",
    description: "AI-powered connections that actually fit your skills and goals. Context, not just keywords."
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
    title: "Mentor-Led Communities",
    description: "Join exclusive communities led by industry experts. Learn from people who've been there."
  },
  {
    icon: <Rocket className="w-5 h-5 text-pink-500" />,
    title: "Early Access Jobs",
    description: "See new opportunities before they go public. The early bird advantage, automated."
  },
  {
    icon: <Users className="w-5 h-5 text-teal-500" />,
    title: "Direct Connections",
    description: "Skip the cold DMs. Connect directly with recruiters and mentors who want to meet you."
  }
];

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="bg-light-card/80 dark:bg-dark-card border border-gray-300 dark:border-white/5 p-8 flex flex-col items-start hover:shadow-lg dark:hover:shadow-white/5 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-white/5">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-200 leading-relaxed font-ibm_plex_mono">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Platform Features</SectionLabel>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Everything You Need To <span className="text-brand">Launch Your Career</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;