'use client'

import { motion } from "framer-motion"
import { FiLink, FiShield, FiClock, FiRefreshCw, FiMonitor, FiZap } from "react-icons/fi"

const features = [
  {
    icon: FiLink,
    title: "Multi-Chain From Day One",
    description: "Native support for Avalanche and Sui with unified monitoring across all your validators.",
  },
  {
    icon: FiShield,
    title: "Risk-First Approach",
    description: "Advanced risk assessment algorithms prioritize critical issues before they impact your operations.",
  },
  {
    icon: FiClock,
    title: "Near Real-Time Updates",
    description: "Sub-second monitoring with instant alerts when your validators need attention.",
  },
  {
    icon: FiRefreshCw,
    title: "Cross-Chain Consistency",
    description: "Unified metrics and alerts across all supported blockchain networks.",
  },
  {
    icon: FiMonitor,
    title: "Clean Minimal UI",
    description: "Intuitive interface designed for both technical operators and non-technical stakers.",
  },
  {
    icon: FiZap,
    title: "Actionable Insights",
    description: "Smart recommendations help you optimize performance and maximize rewards.",
  },
]

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="py-20 bg-[#0F1118]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center">Why Luminex?</h1>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: '#EC4899' }}
            >
              <div className="bg-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
