"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
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
    <section className="relative bg-[#0F1118] py-20 overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Keep an Eye on Your
          <br />
          Validators — Without
          <br />
          the Hassle
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Stay ahead with real-time, risk-based monitoring. No jargon. No switching dashboards. Just clear insights to
          protect your stake
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link
            href="/dashboard"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
          >
            Launch Dashboard
          </Link>
          <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
            Book a Demo
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
