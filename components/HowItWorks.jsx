'use client'

import { motion } from "framer-motion"

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-[#0F1118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">How it works</h2>

        <motion.div
          className="relative flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-20 max-w-4xl">
            {/* Step 1 - Right side */}
            <motion.div
              className="md:order-2 text-left md:text-right max-w-md md:ml-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 md:ml-auto">
                <span className="text-white font-bold text-xl">01</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect Validators</h3>
              <p className="text-gray-300">
                Add your validator addresses across Avalanche and Sui networks with one-click setup.
              </p>
            </motion.div>

            {/* Step 2 - Left side */}
            <motion.div className="md:order-1 text-left max-w-md" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">02</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-Time Monitoring</h3>
              <p className="text-gray-300">
                Our advanced algorithms continuously monitor performance, uptime, and network conditions.
              </p>
            </motion.div>

            {/* Step 3 - Right side */}
            <motion.div
              className="md:order-4 text-left md:text-right max-w-md md:ml-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 md:ml-auto">
                <span className="text-white font-bold text-xl">03</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Risk Assessment</h3>
              <p className="text-gray-300">
                AI-powered risk analysis identifies potential issues before they impact your operations.
              </p>
            </motion.div>

            {/* Step 4 - Left side */}
            <motion.div className="md:order-3 text-left max-w-md" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">04</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Actionable Alerts</h3>
              <p className="text-gray-300">
                Receive intelligent notifications with specific recommendations to optimize preferences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
